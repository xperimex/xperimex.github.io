var elt = document.getElementById("exampleInflection");
var calculator = Desmos.GraphingCalculator(elt,{lockViewport:true, keypad:false});
calculator.updateSettings({ fontSize: 10 });

calculator.setExpression({ id: "example", latex: "f(x) = x^3", color:"#c74440" });
calculator.setExpression({ id: "var", latex: "a = -5", sliderBounds:{min:-1.5, max:1.5, step:.1} });
calculator.setExpression({ id: "tangentPoint", latex: "(a,a^3)", color:'#2d70b3', secret:true });
calculator.setExpression({ id: "fPrime", latex: "f'(x)", color:"#6042a6" });
calculator.setExpression({ id: "slopeValue", latex: "(a,f'(a))", color:"#000000", secret:true });
calculator.setExpression({ id: "tangentSlope", latex: "f'(a)" });
calculator.setExpression({ id: "tangentLine", latex: "f'(a)(x-a)+f(a)", color:"#388c46", secret:true });


calculator.setMathBounds({
  left: -7.5,
  right: 7.5,
  bottom: -6,
  top: 6
});
