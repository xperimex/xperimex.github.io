var elt = document.getElementById("intro");
var calculator = Desmos.GraphingCalculator(elt,{lockViewport:true, keypad:false});

calculator.updateSettings({ fontSize: 10 });

calculator.setExpression({ id: "fundamental", latex: "f(x)=Ax^4+Bx^3+Cx^2+Dx+E", color:"#c74440" });
calculator.setExpression({ id: "a", latex: "A = .05", sliderBounds:{min:-5, max:5, step:.05} });
calculator.setExpression({ id: "b", latex: "B = .1625", sliderBounds:{min:-5, max:5, step:.05} });
calculator.setExpression({ id: "c", latex: "C = -.9", sliderBounds:{min:-5, max:5, step:.05} });
calculator.setExpression({ id: "d", latex: "D = -.85", sliderBounds:{min:-5, max:5, step:.05} });
calculator.setExpression({ id: "e", latex: "E = 1", sliderBounds:{min:-5, max:5, step:.05} });

calculator.setExpression({ id: "p", latex: "p = \\frac{-6B-\\sqrt{36B^2-4*12A*2C}}{24A}", secret:true });
calculator.setExpression({ id: "q", latex: "q = \\frac{-6B+\\sqrt{36B^2-4*12A*2C}}{24A}", secret:true });
calculator.setExpression({ id: "pointP", latex: "(p,f(p))", label:"P", showLabel:true, color:"#2d70b3", labelSize:Desmos.LabelSizes.LARGE, secret:true });
calculator.setExpression({ id: "pointQ", latex: "(q,f(q))", label:"Q", showLabel:true, color:"#2d70b3", labelSize:Desmos.LabelSizes.LARGE, secret:true });
calculator.setExpression({ id: "phi", latex: "\\phi=\\frac{1+\\sqrt{5}}{2}", secret:true});
calculator.setExpression({ id: "l", latex: "l=q-p", secret:true });
calculator.setExpression({ id: "R", latex: "(p+(\\phi*l),f(p+(\\phi*l)))", label:"R", showLabel:true, color:"#2d70b3", labelSize:Desmos.LabelSizes.LARGE, secret:true });
calculator.setExpression({ id: "inflectionLine", latex: "((f(q)-f(p))/(q-p))*(x-p)+f(p)", color:"#388c46", secret:true });

calculator.setExpression({ id: "PQ", latex: "P_{Q} = \\sqrt{ (q-p)^{2} + (f(q)-f(p))^2 }", secret:true });
calculator.setExpression({ id: "PR", latex: "P_{R} = \\sqrt{ (p+(\\phi*l)-p)^{2} + (f(p+(\\phi*l))-f(p))^2 }", secret:true })

calculator.setExpression({ id: "ratio", latex: "\\frac{P_{R}}{P_{Q}}" })

calculator.setMathBounds({
  left: -10,
  right: 10,
  bottom: -15,
  top: 15
});
