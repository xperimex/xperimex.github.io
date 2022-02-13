var elt = document.getElementById("intro");
var calculator = Desmos.GraphingCalculator(elt,{lockViewport:true, keypad:false});

calculator.updateSettings({ fontSize: 10 });

calculator.setExpression({ id: "para1", latex: "(x-x_1)^2 = y - y_1", color:"#c74440" });
calculator.setExpression({ id: "para2", latex: "(y-y_2)^2 = x - x_2", color:"blue" });

calculator.setExpression({ id: "a", latex: "x_1 = 1.3", sliderBounds:{min:-10, max:10, step:.05} });
calculator.setExpression({ id: "b", latex: "y_1 = -6.5", sliderBounds:{min:-10, max:10, step:.05} });
calculator.setExpression({ id: "c", latex: "x_2 = -8.2", sliderBounds:{min:-10, max:10, step:.05} });
calculator.setExpression({ id: "d", latex: "y_2 = .4", sliderBounds:{min:-10, max:10, step:.05} });

calculator.setExpression({ id: "circle", latex: "(x-x_1)^2 + y_1 + (y-y_2)^2 + x_2 = y + x", color:"green", secret:true });



calculator.setMathBounds({
  left: -10,
  right: 10,
  bottom: -15,
  top: 15
});
