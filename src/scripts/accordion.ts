// Animated open/close for <details>. Adds `is-open` immediately so icons can
// transition in step with the height animation. Only one item stays open at a time.
export function smoothDetails(selector = "details[data-smooth]") {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const items = Array.from(document.querySelectorAll<HTMLDetailsElement>(selector));

  const animate = (d: HTMLDetailsElement, shouldClose: boolean) => {
    const summary = d.querySelector("summary");
    if (!summary) return;
    const anim = (d as any).__accAnim as Animation | undefined;
    const closing = (d as any).__accClosing as boolean | undefined;
    const start = d.offsetHeight;
    const actualClose = anim ? !closing : shouldClose;
    anim?.cancel();

    d.classList.toggle("is-open", !actualClose);
    d.style.overflow = "hidden";
    let end: number;
    if (actualClose) {
      end = summary.offsetHeight;
    } else {
      d.open = true;
      end = d.scrollHeight;
    }
    (d as any).__accClosing = actualClose;

    const next = d.animate({ height: [`${start}px`, `${end}px`] }, { duration: 320, easing: "cubic-bezier(0.4, 0, 0.2, 1)" });
    (d as any).__accAnim = next;
    next.onfinish = () => {
      if ((d as any).__accClosing) d.open = false;
      (d as any).__accAnim = null;
      d.style.overflow = "";
    };
    next.oncancel = () => {
      (d as any).__accAnim = null;
    };
  };

  items.forEach((d) => {
    const summary = d.querySelector("summary");
    if (!summary) return;
    d.classList.toggle("is-open", d.open);

    summary.addEventListener("click", (e) => {
      if (reduced.matches) {
        const willOpen = !d.open;
        d.classList.toggle("is-open", willOpen);
        if (willOpen) items.forEach((other) => { if (other !== d) { other.open = false; other.classList.remove("is-open"); } });
        return;
      }
      e.preventDefault();
      const shouldClose = (d as any).__accAnim ? !(d as any).__accClosing : d.open;
      if (!shouldClose) items.forEach((other) => { if (other !== d && (other.open || (other as any).__accAnim)) animate(other, true); });
      animate(d, shouldClose);
    });
  });
}
