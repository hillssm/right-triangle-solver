    import {
      parseMathExpression,
      calculateRightTriangle,
      formatAngleForMode,
      CALCULATOR_INPUT_KEYS,
      type AngleMode,
      type RightTriangleSolution,
      type CalculatorInputKey
    } from '../../src/utils/rightTriangleCalculator';

    type UnitOption = string;

    const UNIT_SCALE: Record<string, number> = {
      m: 1, nm: 1e-9, '\u00B5m': 1e-6, mm: 1e-3, cm: 1e-2, km: 1e3,
      in: 0.0254, ft: 0.3048, yd: 0.9144, mi: 1609.344, nmi: 1852,
      '\u00C5': 1e-10, mil: 0.0000254, pixel: 0.0002645833, pt: 0.0003527778,
      foot_survey_us: 0.3048006096, fathom: 1.8288, au: 149597870700,
      light_second: 299792458, light_minute: 17987547480, light_hour: 1079252848800,
      light_day: 25902068371200, ly: 9460730472580800, kly: 9460730472580800000,
      pc: 3.085677581e16, Mpc: 3.085677581e22
    };
    const formatNumber = (value: number, digits = 4): string => Number(value).toFixed(digits);
    const formatEditableNumber = (value: number, digits = 10): string => String(Number(value.toFixed(digits)));
    const formatWithUnitRaw = (value: number, unit: UnitOption, digits = 4, squared = false): string => {
      const base = formatNumber(value, digits);
      if (!unit) return base;
      return squared ? `${base} ${unit}\u00B2` : `${base} ${unit}`;
    };
    const formatWithUnit = (value: number, unit: UnitOption, digits = 4, squared = false): string => {
      const base = formatNumber(value, digits);
      if (!unit) return base;
      return squared ? `${base} ${unit}<sup>2</sup>` : `${base} ${unit}`;
    };
    const formatAngle = (rad: number, mode: AngleMode): string => `${formatAngleForMode(rad, mode, 4)} ${mode === 'deg' ? 'deg' : 'rad'}`;
    const parseAngleInput = (raw: string, mode: AngleMode): number => {
      let parsed = parseMathExpression(raw);
      if (mode === 'deg' && /pi|\u03C0/i.test(raw)) {
        parsed = (parsed * 180) / Math.PI;
      }
      return parsed;
    };
    const formatMathText = (raw: string): string => {
      const applyRootBars = (value: string): string => {
        let output = '';
        let cursor = 0;

        while (cursor < value.length) {
          if (value[cursor] === '\u221A' && value[cursor + 1] === '(') {
            let depth = 0;
            let end = cursor + 1;

            for (; end < value.length; end++) {
              const char = value[end];
              if (char === '(') depth += 1;
              if (char === ')') {
                depth -= 1;
                if (depth === 0) break;
              }
            }

            if (depth === 0 && end < value.length) {
              const inner = applyRootBars(value.slice(cursor + 2, end));
              output += '&#8730;<span class="math-radical-content">' + inner + '</span>';
              cursor = end + 1;
              continue;
            }
          }

          output += value[cursor];
          cursor += 1;
        }

        return output;
      };

      let text = String(raw)
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/alpha|\u03B1/g, 'A')
        .replace(/beta|\u03B2/g, 'B')
        // Textbook power: variable followed by digit (e.g. x2 -> x^2)
        .replace(/([a-zA-Z])(\d+)/g, '<i>$1</i><sup>$2</sup>')
        // Caret power: ^2 -> <sup>2</sup>
        .replace(/\^(\d+)/g, '<sup>$1</sup>')
        // Unicode power conversion
        .replace(/\u00B9/g, '<sup>1</sup>')
        .replace(/\u00B2/g, '<sup>2</sup>')
        .replace(/\u00B3/g, '<sup>3</sup>')
        .replace(/\u2074/g, '<sup>4</sup>');

      // Italicize single letters representing variables if not already wrapped
      text = text.replace(/(^|[^a-zA-Z<>])([a-zA-Z])(?![a-zA-Z<>])/g, '$1<i>$2</i>');
      return applyRootBars(text);
    };

    const parseStepBlock = (rawStep: string): { title: string; lines: string[] } => {
      const lines = String(rawStep)
        .split(/<br\s*\/?>/gi)
        .map((line) => line.trim())
        .filter(Boolean);

      if (!lines.length) {
        return { title: '', lines: [] };
      }

      const title = lines[0].replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*/g, '').trim();
      return { title: title || lines[0], lines: lines.slice(1) };
    };

    type StepUiLabels = {
      formulaLabel: string;
      substitutionLabel: string;
      answerLabel: string;
      explanationLabel: string;
      detailLabel: string;
      sideA: string;
      sideB: string;
      hypotenuseC: string;
      angleA: string;
      angleB: string;
      area: string;
      perimeter: string;
      altitude: string;
      semiperimeter: string;
      inradius: string;
      circumradius: string;
      segmentP: string;
      segmentQ: string;
    };

    const DEFAULT_STEP_UI_LABELS: StepUiLabels = {
      formulaLabel: 'Formula',
      substitutionLabel: 'Substitution',
      answerLabel: 'Answer',
      explanationLabel: 'Explanation',
      detailLabel: 'Detail',
      sideA: 'Side a',
      sideB: 'Side b',
      hypotenuseC: 'Hypotenuse c',
      angleA: 'Angle A',
      angleB: 'Angle B',
      area: 'Area',
      perimeter: 'Perimeter',
      altitude: 'Altitude h',
      semiperimeter: 'Semiperimeter s',
      inradius: 'Inradius r',
      circumradius: 'Circumradius R',
      segmentP: 'Segment p',
      segmentQ: 'Segment q'
    };

    const localizeStepTitle = (title: string, labels: StepUiLabels): string => {
      const normalized = title.trim();
      if (!normalized) return normalized;

      if (/hypotenuse\s*c/i.test(normalized)) return labels.hypotenuseC;
      if (/leg\s*a/i.test(normalized)) return labels.sideA;
      if (/leg\s*b/i.test(normalized)) return labels.sideB;
      if (/\bangle\s*a\b/i.test(normalized)) return labels.angleA;
      if (/\bangle\s*b\b/i.test(normalized)) return labels.angleB;
      if (/calculate\s+area|^area$/i.test(normalized)) return labels.area;
      if (/calculate\s+perimeter|^perimeter$/i.test(normalized)) return labels.perimeter;
      if (/altitude/i.test(normalized)) return labels.altitude;
      if (/semiperimeter/i.test(normalized)) return labels.semiperimeter;
      if (/inradius/i.test(normalized)) return labels.inradius;
      if (/circumradius/i.test(normalized)) return labels.circumradius;
      if (/^segment\s*p\b/i.test(normalized)) return labels.segmentP;
      if (/^segment\s*q\b/i.test(normalized)) return labels.segmentQ;

      return normalized;
    };

    const splitSubstitutionAndAnswer = (line: string): { substitution: string; answer: string | null } => {
      const normalized = line.trim();
      const parts = normalized.split('=').map((part) => part.trim()).filter(Boolean);
      if (parts.length >= 3) {
        return {
          substitution: parts.slice(0, -1).join(' = '),
          answer: parts[parts.length - 1]
        };
      }
      if (parts.length === 2) {
        return {
          substitution: normalized,
          answer: parts[1]
        };
      }
      return { substitution: normalized, answer: null };
    };

    const buildStepFlow = (lines: string[], uiLabels: StepUiLabels): Array<{ label: string; value: string }> => {
      const cleanedLines = lines.map((line) => line.trim()).filter(Boolean);
      if (!cleanedLines.length) return [];

      const equationLines: string[] = [];
      let formula = '';
      let substitution = '';
      let answer = '';

      for (const line of cleanedLines) {
        const normalizedLine = line.replace(/^use\s+/i, '').trim();
        if (normalizedLine.includes('=')) {
          equationLines.push(normalizedLine);
        }
      }

      if (equationLines.length > 0) {
        formula = equationLines[0];
        substitution = equationLines[equationLines.length - 1];
      }

      if (substitution) {
        const split = splitSubstitutionAndAnswer(substitution);
        if (split.answer) answer = split.answer;
      } else if (formula) {
        const split = splitSubstitutionAndAnswer(formula);
        if (split.answer) answer = split.answer;
      }

      const flow: Array<{ label: string; value: string }> = [];
      if (formula) flow.push({ label: uiLabels.formulaLabel, value: formula });
      if (substitution && substitution !== formula) {
        flow.push({ label: uiLabels.substitutionLabel, value: substitution });
      }
      if (answer) flow.push({ label: uiLabels.answerLabel, value: answer });

      return flow.length ? flow : cleanedLines.map((line) => ({ label: uiLabels.detailLabel, value: line }));
    };

    const renderListItems = (listEl: HTMLElement, items: string[], isStep = false, stepUiLabels: StepUiLabels = DEFAULT_STEP_UI_LABELS) => {
      const fragment = document.createDocumentFragment();

      if (isStep) {
        items.forEach((item, index) => {
          const block = parseStepBlock(item);
          if (!block.title && !block.lines.length) return;

          const li = document.createElement('li');
          li.className = 'rounded-xl border border-outline-variant/10 bg-surface-container-lowest/40 p-3 text-sm text-on-surface-variant transition-colors hover:border-primary/20 hover:bg-surface-container-lowest/60 flex items-start gap-3';
          const num = (index + 1).toString().padStart(2, '0');
          const flowItems = buildStepFlow(block.lines, stepUiLabels);
          const localizedTitle = localizeStepTitle(block.title, stepUiLabels);
          const detailItems = flowItems.length
            ? `<ul class="mt-2 space-y-1 border-l border-outline-variant/20 pl-3">${flowItems
                .map((detail) => {
                  const valueClass = detail.label === stepUiLabels.answerLabel
                    ? 'math-textbook font-semibold text-primary'
                    : 'math-textbook text-on-surface-variant';
                  return `<li><span class="font-semibold text-on-surface">${detail.label}:</span> <span class="${valueClass}">${formatMathText(detail.value)}</span></li>`;
                })
                .join('')}</ul>`
            : '';

          li.innerHTML = `<span class="mt-0.5 font-mono text-[10px] text-primary flex-shrink-0 rounded-md bg-primary/10 px-2 py-1">${num}</span><div class="min-w-0"><p class="math-textbook font-semibold text-on-surface">${formatMathText(localizedTitle)}</p>${detailItems}</div>`;
          fragment.append(li);
        });

        listEl.replaceChildren(fragment);
        return;
      }

      items.forEach((item) => {
        const li = document.createElement('li');
        li.className = 'pl-1 math-textbook';
        li.innerHTML = formatMathText(item);
        fragment.append(li);
      });

      listEl.replaceChildren(fragment);
    };

      const parsePreset = (rawPreset: string): Partial<Record<CalculatorInputKey, string>> => {
        const values: Partial<Record<CalculatorInputKey, string>> = {};
        for (const chunk of rawPreset.split(',')) {
          const [rawKey, rawValue] = chunk.split(':');
          const key = rawKey?.trim() as CalculatorInputKey | undefined;
          const value = rawValue?.trim();
          if (key && value && CALCULATOR_INPUT_KEYS.includes(key)) values[key] = value;
        }
      return values;
    };

    const initTriangleTool = (section: HTMLElement) => {
      const labelsNode = section.querySelector('[data-labels-json]');
      let l: Record<string, string> = {};
      try {
        l = JSON.parse(labelsNode?.textContent || section.getAttribute('data-labels') || '{}');
      } catch {
        l = {};
      }
      const form = section.querySelector('[data-triangle-form]') as HTMLFormElement | null;
      const statusEl = section.querySelector('[data-tool-status]') as HTMLElement | null;
      const formulaListEl = section.querySelector('[data-formula-list]') as HTMLElement | null;
      const stepListEl = section.querySelector('[data-step-list]') as HTMLElement | null;
      const resetButton = section.querySelector('[data-reset-btn]') as HTMLButtonElement | null;
      const copyButton = section.querySelector('[data-copy-btn]') as HTMLButtonElement | null;
      const pathEl = section.querySelector('[data-triangle-path]') as SVGPathElement | null;
      const fillEl = section.querySelector('[data-triangle-fill]') as SVGPathElement | null;
      const altitudeLineEl = section.querySelector('[data-altitude-line]') as SVGLineElement | null;
      const labelA = section.querySelector('[data-label-a]') as SVGTextElement | null;
      const labelB = section.querySelector('[data-label-b]') as SVGTextElement | null;
      const labelC = section.querySelector('[data-label-c]') as SVGTextElement | null;
      const labelAngleAlpha = section.querySelector('[data-label-angle-alpha]') as SVGTextElement | null;
      const labelAngleBeta = section.querySelector('[data-label-angle-beta]') as SVGTextElement | null;
      const labelH = section.querySelector('[data-label-h]') as SVGTextElement | null;
      const modeButtons = Array.from(section.querySelectorAll('[data-angle-mode-option]')) as HTMLButtonElement[];

      const resultEls = {
        a: section.querySelector('[data-result-a]'),
        b: section.querySelector('[data-result-b]'),
        c: section.querySelector('[data-result-hypotenuse]'),
        A: section.querySelector('[data-result-angle-alpha]'),
        B: section.querySelector('[data-result-angle-beta]'),
        area: section.querySelector('[data-result-area]'),
        perimeter: section.querySelector('[data-result-perimeter]'),
        h: section.querySelector('[data-result-altitude]'),
        s: section.querySelector('[data-result-semiperimeter]'),
        r: section.querySelector('[data-result-inradius]'),
        R: section.querySelector('[data-result-circumradius]'),
        p: section.querySelector('[data-result-segment-p]'),
        q: section.querySelector('[data-result-segment-q]'),
        ratioA: section.querySelector('[data-result-ratio-a]'),
        ratioB: section.querySelector('[data-result-ratio-b]'),
        tanA: section.querySelector('[data-result-tangent]')
      };

      if (!form || !statusEl || !formulaListEl || !stepListEl || !resetButton || !copyButton || !pathEl || !fillEl || !altitudeLineEl || !labelA || !labelB || !labelC || !labelAngleAlpha || !labelAngleBeta || !labelH || Object.values(resultEls).some((el) => !el)) return;

        const inputRefs = {
          a: form.querySelector('input[name="a"]'),
          b: form.querySelector('input[name="b"]'),
          c: form.querySelector('input[name="c"]'),
          alpha: form.querySelector('input[name="alpha"]'),
          beta: form.querySelector('input[name="beta"]')
        } satisfies Record<CalculatorInputKey, HTMLInputElement | null>;

        const errorRefs = {
          a: form.querySelector('[data-error-for="a"]'),
          b: form.querySelector('[data-error-for="b"]'),
          c: form.querySelector('[data-error-for="c"]'),
          alpha: form.querySelector('[data-error-for="alpha"]'),
          beta: form.querySelector('[data-error-for="beta"]')
        } satisfies Record<CalculatorInputKey, HTMLElement | null>;

        const originRefs = {
          a: section.querySelector('[data-origin-a]'),
          b: section.querySelector('[data-origin-b]'),
          c: section.querySelector('[data-origin-c]'),
          alpha: section.querySelector('[data-origin-alpha]'),
          beta: section.querySelector('[data-origin-beta]')
        } satisfies Record<CalculatorInputKey, HTMLElement | null>;

        if (Object.values(inputRefs).some((el) => !el) || Object.values(errorRefs).some((el) => !el) || Object.values(originRefs).some((el) => !el)) return;

        const inputs = inputRefs as Record<CalculatorInputKey, HTMLInputElement>;
        const errors = errorRefs as Record<CalculatorInputKey, HTMLElement>;
        const origins = originRefs as Record<CalculatorInputKey, HTMLElement>;
        const r = resultEls as unknown as Record<string, HTMLElement>;

        let angleMode: AngleMode = 'deg';
        let unit: UnitOption = '';
        let lastSolution: RightTriangleSolution | null = null;

        const getFilledCount = () => CALCULATOR_INPUT_KEYS.filter((key) => inputs[key].value.trim().length > 0).length;

        const setStatus = (message: string, isError = false) => {
          statusEl.textContent = message;
          statusEl.classList.toggle('text-error', isError);
        };

        const setFieldError = (key: CalculatorInputKey, message = '') => {
          errors[key].textContent = message;
          inputs[key].setAttribute('aria-invalid', message ? 'true' : 'false');
        };

        const clearFieldErrors = () => {
          for (const key of CALCULATOR_INPUT_KEYS) setFieldError(key, '');
        };

        const labelEntered = l.entered || 'entered';
        const labelComputed = l.computed || 'computed';
        const labelSolvedFrom = l.solvedFrom || 'Solved from';
        const labelStatusDefault = l.statusDefault || '';
        const labelSolutionStepsDefault = l.solutionStepsDefault || '';
        const stepUiLabels: StepUiLabels = {
          formulaLabel: l.formulaLabel || 'Formula',
          substitutionLabel: l.substitutionLabel || 'Substitution',
          answerLabel: l.answerLabel || 'Answer',
          explanationLabel: l.explanationLabel || 'Explanation',
          detailLabel: l.detailLabel || 'Detail',
          sideA: l.sideA || 'Side a',
          sideB: l.sideB || 'Side b',
          hypotenuseC: l.hypotenuseC || 'Hypotenuse c',
          angleA: l.angleA || 'Angle A',
          angleB: l.angleB || 'Angle B',
          area: l.area || 'Area',
          perimeter: l.perimeter || 'Perimeter',
          altitude: l.altitude || 'Altitude h',
          semiperimeter: l.semiperimeter || 'Semiperimeter s',
          inradius: l.inradius || 'Inradius r',
          circumradius: l.circumradius || 'Circumradius R',
          segmentP: l.segmentP || 'Segment p',
          segmentQ: l.segmentQ || 'Segment q'
        };
        const DEFAULT_PATH = 'M 70 70 L 70 260 L 380 260 Z';

        const setOriginState = (provided: CalculatorInputKey[] | null) => {
          for (const key of CALCULATOR_INPUT_KEYS) {
            const entered = provided ? provided.includes(key) : false;
            origins[key].textContent = provided ? (entered ? labelEntered : labelComputed) : '-';
            origins[key].classList.toggle('text-primary', entered);
            origins[key].classList.toggle('text-outline', !entered);
          }
        };

      const setEmptyResults = () => {
        for (const key of ['a', 'b', 'c', 'A', 'B', 'area', 'perimeter', 'h', 's', 'r', 'R', 'p', 'q', 'ratioA', 'ratioB', 'tanA']) r[key].textContent = '-';
        setOriginState(null);
        renderListItems(formulaListEl, []);
        renderListItems(stepListEl, [labelSolutionStepsDefault], true, stepUiLabels);
        pathEl.setAttribute('d', DEFAULT_PATH);
        fillEl.setAttribute('d', DEFAULT_PATH);
        altitudeLineEl.setAttribute('opacity', '0');
        labelH.setAttribute('opacity', '0');
        labelA.textContent = 'a = -';
        labelB.textContent = 'b = -';
        labelC.textContent = 'c = -';
        labelAngleAlpha.textContent = 'A = -';
        labelAngleBeta.textContent = 'B = -';
        labelH.textContent = 'h = -';
        labelA.setAttribute('fill', '#d0c5af');
        labelB.setAttribute('fill', '#d0c5af');
        labelC.setAttribute('fill', '#f1c97d');
        labelAngleAlpha.setAttribute('fill', '#b6b5b4');
        labelAngleBeta.setAttribute('fill', '#b6b5b4');
        lastSolution = null;
      };

      const drawTriangle = (solution: RightTriangleSolution) => {
        const ox = 70;
        const oy = 260;
        const scale = 190 / Math.max(solution.a, solution.b, 1);
        const tx = ox;
        const ty = oy - solution.a * scale;
        const rx = ox + solution.b * scale;
        const ry = oy;
        const path = `M ${tx} ${ty} L ${ox} ${oy} L ${rx} ${ry} Z`;
        pathEl.setAttribute('d', path);
        fillEl.setAttribute('d', path);

        const dx = rx - tx;
        const dy = ry - ty;
        const den = dx * dx + dy * dy;
        const t = den > 0 ? ((ox - tx) * dx + (oy - ty) * dy) / den : 0;
        const fx = tx + t * dx;
        const fy = ty + t * dy;

        altitudeLineEl.setAttribute('x1', String(ox));
        altitudeLineEl.setAttribute('y1', String(oy));
        altitudeLineEl.setAttribute('x2', String(fx));
        altitudeLineEl.setAttribute('y2', String(fy));
        altitudeLineEl.setAttribute('opacity', '1');

        labelH.setAttribute('x', String((ox + fx) / 2 + 8));
        labelH.setAttribute('y', String((oy + fy) / 2 - 8));
        labelH.setAttribute('opacity', '1');
        labelH.textContent = `h = ${formatWithUnit(solution.h, unit, 3)}`;

        labelA.setAttribute('y', String((ty + oy) / 2));
        labelA.textContent = `a = ${formatWithUnit(solution.a, unit, 3)}`;
        labelB.setAttribute('x', String((ox + rx) / 2));
        labelB.textContent = `b = ${formatWithUnit(solution.b, unit, 3)}`;
        labelC.setAttribute('x', String((ox + rx) / 2 + 18));
        labelC.setAttribute('y', String((ty + oy) / 2));
        labelC.textContent = `c = ${formatWithUnit(solution.c, unit, 3)}`;
        labelAngleAlpha.setAttribute('x', String(rx - 80));
        labelAngleAlpha.setAttribute('y', String(oy - 8));
        labelAngleAlpha.textContent = `A = ${formatAngleForMode(solution.alphaRad, angleMode, 3)} ${angleMode === 'deg' ? 'deg' : 'rad'}`;
        labelAngleBeta.setAttribute('x', String(ox + 20));
        labelAngleBeta.setAttribute('y', String(ty + 35));
        labelAngleBeta.textContent = `B = ${formatAngleForMode(solution.betaRad, angleMode, 3)} ${angleMode === 'deg' ? 'deg' : 'rad'}`;

        const entered = new Set(solution.providedKeys);
        labelA.setAttribute('fill', entered.has('a') ? '#f1c97d' : '#d0c5af');
        labelB.setAttribute('fill', entered.has('b') ? '#f1c97d' : '#d0c5af');
        labelC.setAttribute('fill', entered.has('c') ? '#f1c97d' : '#d0c5af');
        labelAngleAlpha.setAttribute('fill', entered.has('alpha') ? '#f1c97d' : '#b6b5b4');
        labelAngleBeta.setAttribute('fill', entered.has('beta') ? '#f1c97d' : '#b6b5b4');
      };

      const renderSolution = (solution: RightTriangleSolution) => {
        r.a.innerHTML = formatWithUnit(solution.a, unit);
        r.b.innerHTML = formatWithUnit(solution.b, unit);
        r.c.innerHTML = formatWithUnit(solution.c, unit);
        r.A.innerHTML = formatAngle(solution.alphaRad, angleMode);
        r.B.innerHTML = formatAngle(solution.betaRad, angleMode);
        r.area.innerHTML = formatWithUnit(solution.area, unit, 4, true);
        r.perimeter.innerHTML = formatWithUnit(solution.perimeter, unit);
        r.h.innerHTML = formatWithUnit(solution.h, unit);
        r.s.innerHTML = formatWithUnit(solution.semiperimeter, unit);
        r.r.innerHTML = formatWithUnit(solution.inradius, unit);
        r.R.innerHTML = formatWithUnit(solution.circumradius, unit);
        r.p.innerHTML = formatWithUnit(solution.segmentP, unit);
        r.q.innerHTML = formatWithUnit(solution.segmentQ, unit);
        r.ratioA.innerHTML = formatNumber(solution.ratioA);
        r.ratioB.innerHTML = formatNumber(solution.ratioB);
        r.tanA.innerHTML = formatNumber(solution.tangentAlpha);

        setOriginState(solution.providedKeys);
        drawTriangle(solution);
        renderListItems(formulaListEl, solution.formulas);
        renderListItems(stepListEl, solution.steps, true, stepUiLabels);

        lastSolution = solution;
      };

        const updateUrlState = () => {
          const params = new URLSearchParams(window.location.search);
          const map: Record<CalculatorInputKey, string> = { a: 'a', b: 'b', c: 'c', alpha: 'A', beta: 'B' };
          for (const key of CALCULATOR_INPUT_KEYS) {
            const value = inputs[key].value.trim();
            if (value) params.set(map[key], value);
            else params.delete(map[key]);
          }
        if (angleMode === 'deg') params.delete('mode');
        else params.set('mode', angleMode);
        if (unit) params.set('unit', unit);
        else params.delete('unit');
        const query = params.toString();
        window.history.replaceState({}, '', query ? `${window.location.pathname}?${query}` : window.location.pathname);
      };

        const readValues = () => {
          const values: Partial<Record<CalculatorInputKey, number>> = {};
          let hasAnyError = false;

          const formData = new FormData(form);
          const units: Record<string, string> = {};
          for (const key of ['a', 'b', 'c']) {
            units[key] = String(formData.get(`${key}_unit`) || 'm');
          }

          for (const key of CALCULATOR_INPUT_KEYS) {
            const raw = inputs[key].value.trim();
          if (!raw) {
            setFieldError(key, '');
            continue;
          }

          try {
            const parsed = key === 'alpha' || key === 'beta' ? parseAngleInput(raw, angleMode) : parseMathExpression(raw);
            values[key] = parsed;
            setFieldError(key, '');
          } catch (error) {
            const fallback =
              key === 'alpha' || key === 'beta'
                ? 'Enter a valid angle.'
                : `Enter a valid value for ${key}.`;
            setFieldError(key, error instanceof Error ? error.message : fallback);
            hasAnyError = true;
          }
        }

        let primaryUnit = '';
        for (const k of ['a', 'b', 'c'] as const) {
          if (values[k] !== undefined) {
            primaryUnit = units[k];
            break;
          }
        }
        if (primaryUnit) {
          unit = primaryUnit;
          for (const k of ['a', 'b', 'c'] as const) {
            if (values[k] !== undefined) {
              const scale = UNIT_SCALE[units[k]] / UNIT_SCALE[primaryUnit];
              values[k] = values[k]! * scale;
            }
          }
        }

        return { values, hasAnyError };
      };

      const solveFromInputs = () => {
        clearFieldErrors();
        const { values, hasAnyError } = readValues();
        if (hasAnyError) {
          setStatus(l.fixErrors || 'Fix highlighted inputs before solving.', true);
          setEmptyResults();
          return;
        }

        try {
            const solution = calculateRightTriangle(values, angleMode);
            renderSolution(solution);
            const readableCase = solution.combination.replace('+', ' + ').replace('alpha', 'A').replace('beta', 'B');
            setStatus(`${labelSolvedFrom} ${readableCase}.`, false);
          } catch (error) {
            const msg = error instanceof Error ? error.message : 'Unable to solve.';
            const lowMsg = msg.toLowerCase();
            let targetKey: CalculatorInputKey | null = null;

            if (lowMsg.includes('c must be larger than side a') || lowMsg.includes('c must be greater than leg a') || lowMsg.includes('hypotenuse c must be')) targetKey = 'c';
            else if (lowMsg.includes('c must be larger than side b') || lowMsg.includes('c must be greater than leg b')) targetKey = 'c';
            else if (lowMsg.includes('side a must be a positive') || (!lowMsg.includes('hypotenuse') && lowMsg.includes('side a'))) targetKey = 'a';
            else if (lowMsg.includes('side b must be a positive') || (!lowMsg.includes('hypotenuse') && lowMsg.includes('side b'))) targetKey = 'b';
            else if (lowMsg.includes('angle a')) targetKey = 'alpha';
            else if (lowMsg.includes('angle b')) targetKey = 'beta';

            if (targetKey) {
              setFieldError(targetKey, msg);
              setStatus(l.fixErrors || 'Please fix errors.', true);
            } else {
              setStatus(msg, true);
            }
          setEmptyResults();
        }

        updateUrlState();
      };

      const syncModeButtons = () => {
        for (const button of modeButtons) {
          const active = button.dataset.angleModeOption === angleMode;
          button.classList.toggle('is-active', active);
          button.setAttribute('aria-pressed', active ? 'true' : 'false');
        }
      };

      const resetTool = () => {
        angleMode = 'deg';
        unit = '';
        for (const key of CALCULATOR_INPUT_KEYS) {
          inputs[key].value = '';
          setFieldError(key, '');
        }
        syncModeButtons();
        setEmptyResults();
        setStatus(l.statusDefault, false);
        updateUrlState();
      };

      const copyResults = async () => {
        if (!lastSolution) {
          setStatus(l.solveFirst || 'Solve before copying.', true);
          return;
        }

        const text = [
          l.resultsTitle || 'Right Triangle Solver Results',
          `a = ${formatWithUnitRaw(lastSolution.a, unit)}`,
          `b = ${formatWithUnitRaw(lastSolution.b, unit)}`,
          `c = ${formatWithUnitRaw(lastSolution.c, unit)}`,
          `A = ${formatAngle(lastSolution.alphaRad, angleMode)}`,
          `B = ${formatAngle(lastSolution.betaRad, angleMode)}`,
          `Area = ${formatWithUnitRaw(lastSolution.area, unit, 4, true)}`,
          `Perimeter = ${formatWithUnitRaw(lastSolution.perimeter, unit)}`,
          `Altitude h = ${formatWithUnitRaw(lastSolution.h, unit)}`,
          `Semiperimeter s = ${formatWithUnitRaw(lastSolution.semiperimeter, unit)}`,
          `Inradius r = ${formatWithUnitRaw(lastSolution.inradius, unit)}`,
          `Circumradius R = ${formatWithUnitRaw(lastSolution.circumradius, unit)}`,
          `Segment p = ${formatWithUnitRaw(lastSolution.segmentP, unit)}`,
          `Segment q = ${formatWithUnitRaw(lastSolution.segmentQ, unit)}`
        ].join('\n');

        try {
          if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(text);
          } else {
            const area = document.createElement('textarea');
            area.value = text;
            area.setAttribute('readonly', 'true');
            area.style.position = 'fixed';
            area.style.opacity = '0';
            document.body.append(area);
            area.select();
            document.execCommand('copy');
            area.remove();
          }
          setStatus(l.copySuccess || 'Copied.', false);
        } catch {
          setStatus('Error copying results.', true);
        }
      };

      const hydrateFromUrl = () => {
        const params = new URLSearchParams(window.location.search);
        const mode = params.get('mode');
        const urlUnit = params.get('unit');
        if (mode === 'deg' || mode === 'rad') angleMode = mode;
        if (urlUnit && UNIT_SCALE[urlUnit]) unit = urlUnit;

        const map: Array<[string, CalculatorInputKey]> = [['a', 'a'], ['b', 'b'], ['c', 'c'], ['A', 'alpha'], ['B', 'beta']];
        let hasAny = false;
        for (const [param, key] of map) {
          const value = params.get(param)?.trim() ?? '';
          if (value) hasAny = true;
          inputs[key].value = value;
        }

        syncModeButtons();

        const filled = getFilledCount();
        if (hasAny && filled >= 2) solveFromInputs();
        else {
          setEmptyResults();
          setStatus(l.statusDefault, false);
        }
      };

      form.addEventListener('submit', (event) => {
        event.preventDefault();
        solveFromInputs();
      });

      for (const key of CALCULATOR_INPUT_KEYS) {
        inputs[key].addEventListener('input', () => {
          setFieldError(key, '');
          const filled = getFilledCount();
          if (filled >= 2) {
            solveFromInputs();
            return;
          }
          if (filled === 0) {
            setEmptyResults();
            setStatus(l.statusDefault, false);
          }
          updateUrlState();
        });

        inputs[key].addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            solveFromInputs();
          }
        });
      }

      for (const button of modeButtons) {
        button.addEventListener('click', () => {
          const next = button.dataset.angleModeOption as AngleMode | undefined;
          if (!next || next === angleMode) return;
          const previousMode = angleMode;
          for (const key of ['alpha', 'beta'] as const) {
            const raw = inputs[key].value.trim();
            if (!raw) continue;
            try {
              const parsedInPreviousMode = parseAngleInput(raw, previousMode);
              const converted = next === 'deg' ? (parsedInPreviousMode * 180) / Math.PI : (parsedInPreviousMode * Math.PI) / 180;
              inputs[key].value = formatEditableNumber(converted);
              setFieldError(key, '');
            } catch {
            }
          }
          angleMode = next;
          syncModeButtons();
          if (getFilledCount() >= 2) solveFromInputs();
          else if (lastSolution) renderSolution(lastSolution);
          updateUrlState();
        });
      }

      for (const uk of ['a_unit', 'b_unit', 'c_unit']) {
        const sel = form.querySelector(`[name="${uk}"]`);
        if (sel) {
          sel.addEventListener('change', () => {
            const filled = getFilledCount();
            if (filled >= 2) solveFromInputs();
            updateUrlState();
          });
        }
      }

      resetButton.addEventListener('click', resetTool);
      copyButton.addEventListener('click', copyResults);

      setEmptyResults();
      hydrateFromUrl();
    };

    for (const section of Array.from(document.querySelectorAll('[data-right-triangle-tool]')) as HTMLElement[]) {
      initTriangleTool(section);
    }
