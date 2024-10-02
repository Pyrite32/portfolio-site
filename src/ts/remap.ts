const lerp = (from: number, to: number, weight: number) => {
    return from + (to - from) * weight;
  };
  
  const inverseLerp = (from: number, to: number, val: number) => {
    return (val - from) / (to - from);
  };
  
  const remap = (
    val: number,
    istart: number,
    istop: number,
    ostart: number,
    ostop: number
  ) => {
    return lerp(ostart, ostop, inverseLerp(istart, istop, val));
  };

export default remap;