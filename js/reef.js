const aUrl = new URL("./reef.a.txt", import.meta.url);
const bUrl = new URL("./reef.b.txt", import.meta.url);
const [a, b] = await Promise.all([
  fetch(aUrl).then((r) => {
    if (!r.ok) throw new Error("Could not load reef part A");
    return r.text();
  }),
  fetch(bUrl).then((r) => {
    if (!r.ok) throw new Error("Could not load reef part B");
    return r.text();
  }),
]);
const blob = new Blob([a, b], { type: "text/javascript" });
const url = URL.createObjectURL(blob);
const mod = await import(url);
export const mountReef = mod.mountReef;
