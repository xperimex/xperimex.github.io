var elt = document.getElementById("transformedGraph");
var calculator = Desmos.GraphingCalculator(elt,{lockViewport:true, keypad:false});
calculator.updateSettings({ fontSize: 9.5 });

calculator.setExpression({ id: "original", latex: "f(x) = Ax^4+Bx^3+Cx^2+Dx+E", color:"#c74440" });
calculator.setExpression({ id: "a", latex: "A = .05", sliderBounds:{min:-5, max:5, step:.05} });
calculator.setExpression({ id: "b", latex: "B = .1625", sliderBounds:{min:-5, max:5, step:.05} });
calculator.setExpression({ id: "c", latex: "C = -.9", sliderBounds:{min:-5, max:5, step:.05} });
calculator.setExpression({ id: "d", latex: "D = -.85", sliderBounds:{min:-5, max:5, step:.05} });
calculator.setExpression({ id: "e", latex: "E = 1", sliderBounds:{min:-5, max:5, step:.05} });
calculator.setExpression({ id: "p", latex: "p = \\frac{-6B-\\sqrt{36B^2-4*12A*2C}}{24A}", secret:true });
calculator.setExpression({ id: "q", latex: "q = \\frac{-6B+\\sqrt{36B^2-4*12A*2C}}{24A}", secret:true });
calculator.setExpression({ id: "transfomed", latex: "h(x) = \\frac{1}{q-p}(f([q-p]x+p)-f(p))", color:"#fa7e19" });

calculator.setExpression({ id: "pointP", latex: "(p,f(p))", label:"P", showLabel:true, color:"#2d70b3", labelSize:Desmos.LabelSizes.LARGE, secret:true });
calculator.setExpression({ id: "pointQ", latex: "(q,f(q))", label:"Q", showLabel:true, color:"#2d70b3", labelSize:Desmos.LabelSizes.LARGE, secret:true });
calculator.setExpression({ id: "phi", latex: "\\phi=\\frac{1+\\sqrt{5}}{2}", secret:true});
calculator.setExpression({ id: "R", latex: "(p+(\\phi*l),f(p+(\\phi*l)))", label:"R", showLabel:true, color:"#2d70b3", labelSize:Desmos.LabelSizes.LARGE, secret:true });
calculator.setExpression({ id: "l", latex: "l=q-p", secret:true });

calculator.setExpression({ id: "inflectionLine", latex: "((f(q)-f(p))/(q-p))*(x-p)+f(p)", color:"#388c46", secret:true });

calculator.setExpression({ id: "transformedP", latex: "(0,0)", label:" P' ", showLabel:true, color:"#6042a6", labelSize:Desmos.LabelSizes.LARGE, secret:true });
calculator.setExpression({ id: "transformedQ", latex: "(1,h(1))", label:" Q' ", showLabel:true, color:"#6042a6", labelSize:Desmos.LabelSizes.LARGE, secret:true });
calculator.setExpression({ id: "transformedR", latex: "(\\phi,h(\\phi))", label:" R' ", showLabel:true, color:"#6042a6", labelSize:Desmos.LabelSizes.LARGE, secret:true });

calculator.setExpression({ id: "transformedLine", latex: "h(1)x", color:"#000000", secret:true });


calculator.setMathBounds({
  left: -6,
  right: 6,
  bottom: -9,
  top: 9
});
