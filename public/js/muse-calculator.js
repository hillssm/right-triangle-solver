(() => {
  const root = document.querySelector('[data-muse-root]');
  if (!root) return;

  const modeSelect = root.querySelector('[data-mode-select]');
  const input1 = root.querySelector('[data-input1]');
  const input2 = root.querySelector('[data-input2]');
  const input1Label = root.querySelector('[data-input1-label]');
  const input2Label = root.querySelector('[data-input2-label]');
  const input1Unit = root.querySelector('[data-input1-unit]');
  const input2Unit = root.querySelector('[data-input2-unit]');
  const modeDescription = root.querySelector('[data-mode-description]');
  const form = root.querySelector('[data-calculator-form]');
  const statusEl = root.querySelector('[data-status]');
  const resetBtn = root.querySelector('[data-reset-btn]');
  const stepsList = root.querySelector('[data-steps-list]');
  const historyList = root.querySelector('[data-history-list]');
  const trianglePath = root.querySelector('[data-triangle-path]');
  const triangleFill = root.querySelector('[data-triangle-fill]');
  const labelA = root.querySelector('[data-label-a]');
  const labelB = root.querySelector('[data-label-b]');
  const labelC = root.querySelector('[data-label-c]');
  const labelAlpha = root.querySelector('[data-label-alpha]');
  const labelBeta = root.querySelector('[data-label-beta]');

  if (
    !modeSelect ||
    !input1 ||
    !input2 ||
    !input1Label ||
    !input2Label ||
    !input1Unit ||
    !input2Unit ||
    !modeDescription ||
    !form ||
    !statusEl ||
    !resetBtn ||
    !stepsList ||
    !historyList ||
    !trianglePath ||
    !triangleFill ||
    !labelA ||
    !labelB ||
    !labelC ||
    !labelAlpha ||
    !labelBeta
  ) {
    return;
  }

  const degToRad = (deg) => (deg * Math.PI) / 180;
  const radToDeg = (rad) => (rad * 180) / Math.PI;
  const fmt = (value, digits = 4) => Number(value).toFixed(digits);
  const HISTORY_KEY = 'right_triangle_calculator_history_v1';

  const MODES = {
    legs_ab: {
      label: 'Leg a + Leg b',
      description: 'Given both legs, compute hypotenuse, angles, and all derived values.',
      input1: { label: 'Leg a', unit: 'units' },
      input2: { label: 'Leg b', unit: 'units' },
      solve: (x, y) => {
        if (!(x > 0) || !(y > 0)) throw new Error('Both legs must be positive.');
        const a = x;
        const b = y;
        const c = Math.hypot(a, b);
        const A = radToDeg(Math.atan2(a, b));
        const B = 90 - A;
        return {
          a,
          b,
          c,
          A,
          B,
          steps: ['Input mode: Leg a + Leg b.', 'c = sqrt(a^2 + b^2)', 'A = atan(a / b), B = 90 - A']
        };
      }
    },
    legA_c: {
      label: 'Leg a + Hypotenuse c',
      description: 'Recover leg b by Pythagorean rearrangement.',
      input1: { label: 'Leg a', unit: 'units' },
      input2: { label: 'Hypotenuse c', unit: 'units' },
      solve: (x, y) => {
        if (!(x > 0) || !(y > 0)) throw new Error('Values must be positive.');
        const a = x;
        const c = y;
        if (c <= a) throw new Error('Hypotenuse c must be greater than leg a.');
        const b = Math.sqrt(c * c - a * a);
        const A = radToDeg(Math.asin(a / c));
        const B = 90 - A;
        return {
          a,
          b,
          c,
          A,
          B,
          steps: ['Input mode: Leg a + Hypotenuse c.', 'b = sqrt(c^2 - a^2)', 'A = asin(a / c), B = 90 - A']
        };
      }
    },
    legB_c: {
      label: 'Leg b + Hypotenuse c',
      description: 'Recover leg a by Pythagorean rearrangement.',
      input1: { label: 'Leg b', unit: 'units' },
      input2: { label: 'Hypotenuse c', unit: 'units' },
      solve: (x, y) => {
        if (!(x > 0) || !(y > 0)) throw new Error('Values must be positive.');
        const b = x;
        const c = y;
        if (c <= b) throw new Error('Hypotenuse c must be greater than leg b.');
        const a = Math.sqrt(c * c - b * b);
        const A = radToDeg(Math.acos(b / c));
        const B = 90 - A;
        return {
          a,
          b,
          c,
          A,
          B,
          steps: ['Input mode: Leg b + Hypotenuse c.', 'a = sqrt(c^2 - b^2)', 'A = acos(b / c), B = 90 - A']
        };
      }
    },
    angleA_legA: {
      label: 'Angle A + Leg a',
      description: 'Use sine and tangent with angle A.',
      input1: { label: 'Angle A', unit: 'deg' },
      input2: { label: 'Leg a', unit: 'units' },
      solve: (x, y) => {
        if (!(x > 0 && x < 90)) throw new Error('Angle A must be between 0 and 90 degrees.');
        if (!(y > 0)) throw new Error('Leg a must be positive.');
        const A = x;
        const a = y;
        const c = a / Math.sin(degToRad(A));
        const b = a / Math.tan(degToRad(A));
        const B = 90 - A;
        return {
          a,
          b,
          c,
          A,
          B,
          steps: ['Input mode: Angle A + Leg a.', 'c = a / sin(A)', 'b = a / tan(A), B = 90 - A']
        };
      }
    },
    angleA_legB: {
      label: 'Angle A + Leg b',
      description: 'Use cosine and tangent with angle A.',
      input1: { label: 'Angle A', unit: 'deg' },
      input2: { label: 'Leg b', unit: 'units' },
      solve: (x, y) => {
        if (!(x > 0 && x < 90)) throw new Error('Angle A must be between 0 and 90 degrees.');
        if (!(y > 0)) throw new Error('Leg b must be positive.');
        const A = x;
        const b = y;
        const c = b / Math.cos(degToRad(A));
        const a = b * Math.tan(degToRad(A));
        const B = 90 - A;
        return {
          a,
          b,
          c,
          A,
          B,
          steps: ['Input mode: Angle A + Leg b.', 'c = b / cos(A)', 'a = b * tan(A), B = 90 - A']
        };
      }
    },
    angleA_c: {
      label: 'Angle A + Hypotenuse c',
      description: 'Directly project hypotenuse into legs.',
      input1: { label: 'Angle A', unit: 'deg' },
      input2: { label: 'Hypotenuse c', unit: 'units' },
      solve: (x, y) => {
        if (!(x > 0 && x < 90)) throw new Error('Angle A must be between 0 and 90 degrees.');
        if (!(y > 0)) throw new Error('Hypotenuse must be positive.');
        const A = x;
        const c = y;
        const a = c * Math.sin(degToRad(A));
        const b = c * Math.cos(degToRad(A));
        const B = 90 - A;
        return {
          a,
          b,
          c,
          A,
          B,
          steps: ['Input mode: Angle A + Hypotenuse c.', 'a = c * sin(A)', 'b = c * cos(A), B = 90 - A']
        };
      }
    },
    angleB_legA: {
      label: 'Angle B + Leg a',
      description: 'Use complementary-angle relations with angle B.',
      input1: { label: 'Angle B', unit: 'deg' },
      input2: { label: 'Leg a', unit: 'units' },
      solve: (x, y) => {
        if (!(x > 0 && x < 90)) throw new Error('Angle B must be between 0 and 90 degrees.');
        if (!(y > 0)) throw new Error('Leg a must be positive.');
        const B = x;
        const a = y;
        const c = a / Math.cos(degToRad(B));
        const b = a * Math.tan(degToRad(B));
        const A = 90 - B;
        return {
          a,
          b,
          c,
          A,
          B,
          steps: ['Input mode: Angle B + Leg a.', 'c = a / cos(B)', 'b = a * tan(B), A = 90 - B']
        };
      }
    },
    angleB_legB: {
      label: 'Angle B + Leg b',
      description: 'Solve from angle B and opposite leg b.',
      input1: { label: 'Angle B', unit: 'deg' },
      input2: { label: 'Leg b', unit: 'units' },
      solve: (x, y) => {
        if (!(x > 0 && x < 90)) throw new Error('Angle B must be between 0 and 90 degrees.');
        if (!(y > 0)) throw new Error('Leg b must be positive.');
        const B = x;
        const b = y;
        const c = b / Math.sin(degToRad(B));
        const a = b / Math.tan(degToRad(B));
        const A = 90 - B;
        return {
          a,
          b,
          c,
          A,
          B,
          steps: ['Input mode: Angle B + Leg b.', 'c = b / sin(B)', 'a = b / tan(B), A = 90 - B']
        };
      }
    },
    angleB_c: {
      label: 'Angle B + Hypotenuse c',
      description: 'Direct side recovery from angle B.',
      input1: { label: 'Angle B', unit: 'deg' },
      input2: { label: 'Hypotenuse c', unit: 'units' },
      solve: (x, y) => {
        if (!(x > 0 && x < 90)) throw new Error('Angle B must be between 0 and 90 degrees.');
        if (!(y > 0)) throw new Error('Hypotenuse must be positive.');
        const B = x;
        const c = y;
        const b = c * Math.sin(degToRad(B));
        const a = c * Math.cos(degToRad(B));
        const A = 90 - B;
        return {
          a,
          b,
          c,
          A,
          B,
          steps: ['Input mode: Angle B + Hypotenuse c.', 'b = c * sin(B)', 'a = c * cos(B), A = 90 - B']
        };
      }
    }
  };

  const outputRefs = {
    a: root.querySelector('[data-out-a]'),
    b: root.querySelector('[data-out-b]'),
    c1: root.querySelector('[data-out-c]'),
    c2: root.querySelector('[data-out-c-2]'),
    A: root.querySelector('[data-out-a-angle]'),
    B: root.querySelector('[data-out-b-angle]'),
    area: root.querySelector('[data-out-area]'),
    perimeter: root.querySelector('[data-out-perimeter]'),
    s: root.querySelector('[data-out-s]'),
    h: root.querySelector('[data-out-h]'),
    r: root.querySelector('[data-out-r]'),
    R: root.querySelector('[data-out-R]'),
    p: root.querySelector('[data-out-p]'),
    q: root.querySelector('[data-out-q]'),
    sinA: root.querySelector('[data-out-sinA]'),
    cosA: root.querySelector('[data-out-cosA]'),
    tanA: root.querySelector('[data-out-tanA]')
  };

  const allOutputsPresent = Object.values(outputRefs).every(Boolean);
  if (!allOutputsPresent) return;

  let history = [];

  const readHistory = () => {
    try {
      const raw = localStorage.getItem(HISTORY_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  const saveHistory = () => {
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 12)));
    } catch {
      // ignore storage failures
    }
  };

  const renderHistory = () => {
    if (!historyList) return;
    if (history.length === 0) {
      historyList.innerHTML = '<li class="text-slate-500">No history yet. Solve to save entries.</li>';
      return;
    }

    historyList.innerHTML = history
      .slice(0, 8)
      .map((item) => {
        const time = new Date(item.timestamp).toLocaleString();
        return `<li class="rounded-md border border-outline-variant/15 bg-surface-container-lowest px-3 py-2">
          <div class="text-slate-200">${item.mode}</div>
          <div class="text-slate-400">${item.inputs}</div>
          <div class="text-primary">c = ${item.c}</div>
          <div class="text-slate-500">${time}</div>
        </li>`;
      })
      .join('');
  };

  const setModeLabels = () => {
    const mode = MODES[modeSelect.value] ?? MODES.legs_ab;
    input1Label.textContent = mode.input1.label;
    input2Label.textContent = mode.input2.label;
    input1Unit.textContent = mode.input1.unit;
    input2Unit.textContent = mode.input2.unit;
    modeDescription.textContent = mode.description;
  };

  const setOutputs = (result) => {
    outputRefs.a.textContent = fmt(result.a);
    outputRefs.b.textContent = fmt(result.b);
    outputRefs.c1.textContent = fmt(result.c);
    outputRefs.c2.textContent = fmt(result.c);
    outputRefs.A.textContent = fmt(result.A);
    outputRefs.B.textContent = fmt(result.B);
    outputRefs.area.textContent = fmt(result.area);
    outputRefs.perimeter.textContent = fmt(result.perimeter);
    outputRefs.s.textContent = fmt(result.s);
    outputRefs.h.textContent = fmt(result.h);
    outputRefs.r.textContent = fmt(result.r);
    outputRefs.R.textContent = fmt(result.R);
    outputRefs.p.textContent = fmt(result.p);
    outputRefs.q.textContent = fmt(result.q);
    outputRefs.sinA.textContent = fmt(result.sinA);
    outputRefs.cosA.textContent = fmt(result.cosA);
    outputRefs.tanA.textContent = fmt(result.tanA);
  };

  const setSteps = (steps) => {
    stepsList.className = 'mt-4 grid gap-3';
    stepsList.innerHTML = steps
      .map((step, index) => {
        const num = (index + 1).toString().padStart(2, '0');
        const text = step.replace(/alpha/g, 'A').replace(/beta/g, 'B');
        return `<li class="rounded-xl border border-outline-variant/10 bg-surface-container-lowest/40 p-3 text-sm text-on-surface-variant transition-colors hover:border-primary/20 hover:bg-surface-container-lowest/60 flex items-start gap-3">
          <span class="mt-0.5 font-mono text-[10px] text-primary/60 flex-shrink-0">${num}</span>
          <span>${text}</span>
        </li>`;
      })
      .join('');
  };

  const drawTriangle = (result) => {
    const originX = 60;
    const originY = 240;
    const maxLeg = Math.max(result.a, result.b, 1);
    const maxDraw = 280;
    const scale = maxDraw / maxLeg;
    const topX = originX;
    const topY = originY - result.a * scale;
    const rightX = originX + result.b * scale;
    const rightY = originY;
    const path = `M ${topX} ${topY} L ${originX} ${originY} L ${rightX} ${rightY} Z`;

    trianglePath.setAttribute('d', path);
    triangleFill.setAttribute('d', path);

    labelA.setAttribute('y', String((topY + originY) / 2));
    labelA.textContent = `a = ${fmt(result.a, 3)}`;
    labelB.setAttribute('x', String((originX + rightX) / 2));
    labelB.textContent = `b = ${fmt(result.b, 3)}`;
    labelC.setAttribute('x', String((originX + rightX) / 2 + 20));
    labelC.setAttribute('y', String((topY + originY) / 2));
    labelC.textContent = `c = ${fmt(result.c, 3)}`;
    labelAlpha.textContent = `A = ${fmt(result.A, 3)} deg`;
    labelBeta.textContent = `B = ${fmt(result.B, 3)} deg`;
  };

  const enrichResult = (base) => {
    const area = 0.5 * base.a * base.b;
    const perimeter = base.a + base.b + base.c;
    const s = perimeter / 2;
    const h = (base.a * base.b) / base.c;
    const r = (base.a + base.b - base.c) / 2;
    const R = base.c / 2;
    const p = (base.a * base.a) / base.c;
    const q = (base.b * base.b) / base.c;
    const sinA = base.a / base.c;
    const cosA = base.b / base.c;
    const tanA = base.a / base.b;

    return { ...base, area, perimeter, s, h, r, R, p, q, sinA, cosA, tanA };
  };

  const addHistoryEntry = (modeLabel, inputText, cValue) => {
    history.unshift({
      timestamp: Date.now(),
      mode: modeLabel,
      inputs: inputText,
      c: fmt(cValue, 4)
    });
    history = history.slice(0, 12);
    saveHistory();
    renderHistory();
  };

  const solveCurrent = () => {
    const mode = MODES[modeSelect.value];
    if (!mode) {
      statusEl.textContent = 'Invalid mode selected.';
      return;
    }

    const x = Number.parseFloat(String(input1.value));
    const y = Number.parseFloat(String(input2.value));

    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      statusEl.textContent = 'Both inputs must be valid numbers.';
      return;
    }

    try {
      const base = mode.solve(x, y);
      const full = enrichResult(base);

      if (
        !Number.isFinite(full.a) ||
        !Number.isFinite(full.b) ||
        !Number.isFinite(full.c) ||
        !(full.a > 0 && full.b > 0 && full.c > 0)
      ) {
        throw new Error('Computation failed. Please check your inputs.');
      }

      setOutputs(full);
      setSteps([
        ...base.steps,
        'Area = (a * b) / 2, Perimeter = a + b + c',
        'h = ab/c, r = (a + b - c)/2, R = c/2'
      ]);
      drawTriangle(full);

      statusEl.textContent = `Solved successfully with mode "${mode.label}".`;
      addHistoryEntry(mode.label, `${mode.input1.label}: ${x}, ${mode.input2.label}: ${y}`, full.c);
    } catch (err) {
      statusEl.textContent = err instanceof Error ? err.message : 'Unable to solve with these inputs.';
    }
  };

  const resetCalculator = () => {
    modeSelect.value = 'legs_ab';
    setModeLabels();
    input1.value = '3';
    input2.value = '4';
    solveCurrent();
  };

  modeSelect.addEventListener('change', setModeLabels);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    solveCurrent();
  });
  resetBtn.addEventListener('click', resetCalculator);

  history = readHistory();
  renderHistory();
  setModeLabels();
  resetCalculator();
})();
