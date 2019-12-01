// https://observablehq.com/@matheusbarrio/relatorio-um-quadro-sobre-um-supermercado-em-fortaleza@425
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Relatório: Um quadro sobre um supermercado em Fortaleza

Este relatório, tem o propósito de entender melhor as relações de consumo num supermercado, em particular, um supermercado de Fortaleza. Iremos demonstrar alguns dados, que mostram a evolução dos preços, da sazionalidade de alguns produtos e das associações dos produtos.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md` <h2> Sessão 1: Evolução dos preços </h2>
<p> Como evoluiu o preço da cesta básica? Quanto variou em relação a inflação IPCA? </p>`
)});
  main.variable(observer("buildcomposite")).define("buildcomposite", ["md","container","dc","d3","dateDim","cestaBasicaByMonthGroup","ipcaByMonthGroup"], function(md,container,dc,d3,dateDim,cestaBasicaByMonthGroup,ipcaByMonthGroup)
{
  let view = md`${container('chart1', 'Cesta Básica x IPCA')}`
  let compositeChart = dc.compositeChart(view.querySelector("#chart1"))
  let xScale = d3.scaleTime()
                  .domain([dateDim.bottom(1)[0].date, dateDim.top(1)[0].date])
  compositeChart.width(800)
              .height(400)
              .margins({top: 50, right: 50, bottom: 25, left: 40})
              .dimension(dateDim)
              .x(xScale)
              .xUnits(d3.timeDays)
              .renderHorizontalGridLines(true)
              .legend(dc.legend().x(700).y(5).itemHeight(13).gap(5))
              .brushOn(false)
              .compose([
                  dc.lineChart(compositeChart)
                    .group(cestaBasicaByMonthGroup, 'Cesta Básica')
                    .ordinalColors(['steelblue']),
                  dc.lineChart(compositeChart)
                    .group(ipcaByMonthGroup, 'IPCA')
                    .ordinalColors(['darkorange'])])
  dc.renderAll()
  return view      
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`<p>É possível perceber que o preço da cesta básica varia acima da inflação IPCA. A comparação pode não ser a mais adequada, levando em consideração que o IPCA é um índice que considera outros fatores que não só os custos dos produtos da cesta básica. Porém, o salario mínimo é reajustado em função deste índice. Portanto, é possível dizer que o cidadão perde poder de compra sobre a cesta básica.</p>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md` <p> Agora uma visão mais específica dos produtos que compõe a cesta básica, e como foi a evolução individual de cada um </p>`
)});
  main.variable(observer("produtos_cestas")).define("produtos_cestas", ["md","container","dc","d3","dateDim2","arrozByMonthGroup","salByMonthGroup","vinagreByMonthGroup","molhoTomateByMonthGroup","ovosByMonthGroup","ervilhaByMonthGroup","miojoByMonthGroup","leiteByMonthGroup","crDentalByMonthGroup","milhoByMonthGroup","creamcrackerByMonthGroup","frangoByMonthGroup","cafeByMonthGroup","carneByMonthGroup","queijoByMonthGroup","feijaoByMonthGroup","oleoByMonthGroup","toddyByMonthGroup","fubaByMonthGroup","acucarByMonthGroup","maioneseByMonthGroup","saboneteByMonthGroup","macarraoByMonthGroup"], function(md,container,dc,d3,dateDim2,arrozByMonthGroup,salByMonthGroup,vinagreByMonthGroup,molhoTomateByMonthGroup,ovosByMonthGroup,ervilhaByMonthGroup,miojoByMonthGroup,leiteByMonthGroup,crDentalByMonthGroup,milhoByMonthGroup,creamcrackerByMonthGroup,frangoByMonthGroup,cafeByMonthGroup,carneByMonthGroup,queijoByMonthGroup,feijaoByMonthGroup,oleoByMonthGroup,toddyByMonthGroup,fubaByMonthGroup,acucarByMonthGroup,maioneseByMonthGroup,saboneteByMonthGroup,macarraoByMonthGroup)
{
  let view = md`${container('chart2', 'Evolução dos preços dos produtos da Cesta Básica')}`
  let compositeChart = dc.compositeChart(view.querySelector("#chart2"))
  let xScale = d3.scaleTime()
                  .domain([dateDim2.bottom(1)[0].date, dateDim2.top(1)[0].date])
  compositeChart.width(900)
              .height(400)
              .margins({top: 50, right: 110, bottom: 25, left: 40})
              .dimension(dateDim2)
              .x(xScale)
              .xUnits(d3.timeDays)
              .renderHorizontalGridLines(true)
              .legend(dc.legend().x(800).y(5).itemHeight(13).gap(5))
              .brushOn(false)
              .compose([
                  dc.lineChart(compositeChart)
                    .group(arrozByMonthGroup, 'Arroz')
                    .ordinalColors(['cyan']),
                  dc.lineChart(compositeChart)
                    .group(salByMonthGroup, 'Sal')
                    .ordinalColors(['grey']),
                  dc.lineChart(compositeChart)
                    .group(vinagreByMonthGroup, 'Vinagre')
                    .ordinalColors(['magenta']),
                  dc.lineChart(compositeChart)
                    .group(molhoTomateByMonthGroup, 'Molho de Tomate')
                    .ordinalColors(['red']),
                  dc.lineChart(compositeChart)
                    .group(ovosByMonthGroup, 'Ovos')
                    .ordinalColors(['Green']),
                  dc.lineChart(compositeChart)
                    .group(ervilhaByMonthGroup, 'Ervilha')
                    .ordinalColors(['green']),
                  dc.lineChart(compositeChart)
                    .group(miojoByMonthGroup, 'Miojo')
                    .ordinalColors(['yellow']),
                  dc.lineChart(compositeChart)
                    .group(leiteByMonthGroup, 'Leite')
                    .ordinalColors(['teal']),
                  dc.lineChart(compositeChart)
                    .group(crDentalByMonthGroup, 'Creme Dental')
                    .ordinalColors(['mint']),
                  dc.lineChart(compositeChart)
                    .group(milhoByMonthGroup, 'Milho')
                    .ordinalColors(['olive']),
                  dc.lineChart(compositeChart)
                    .group(creamcrackerByMonthGroup, 'Cream Cracker')
                    .ordinalColors(['lavender']),
                  dc.lineChart(compositeChart)
                    .group(frangoByMonthGroup, 'Frango')
                    .ordinalColors(['coral']),
                  dc.lineChart(compositeChart)
                    .group(cafeByMonthGroup, 'Café')
                    .ordinalColors(['black']),
                  dc.lineChart(compositeChart)
                    .group(carneByMonthGroup, 'Carne Moída')
                    .ordinalColors(['maroon']),
                  dc.lineChart(compositeChart)
                    .group(queijoByMonthGroup, 'Queijo Ralado')
                    .ordinalColors(['orange']),
                  dc.lineChart(compositeChart)
                    .group(feijaoByMonthGroup, 'Feijão Carioca')
                    .ordinalColors(['brown']),
                  dc.lineChart(compositeChart)
                    .group(oleoByMonthGroup, 'Óleo de Soja')
                    .ordinalColors(['navy']),
                  dc.lineChart(compositeChart)
                    .group(toddyByMonthGroup, 'Toddy')
                    .ordinalColors(['purple']),
                  dc.lineChart(compositeChart)
                    .group(fubaByMonthGroup, 'Fubá')
                    .ordinalColors(['lime']),
                  dc.lineChart(compositeChart)
                    .group(acucarByMonthGroup, 'Açucar')
                    .ordinalColors(['pink']),
                  dc.lineChart(compositeChart)
                    .group(maioneseByMonthGroup, 'Maionese')
                    .ordinalColors(['blue']),
                  dc.lineChart(compositeChart)
                    .group(saboneteByMonthGroup, 'Sabonete')
                    .ordinalColors(['steel']),
                  dc.lineChart(compositeChart)
                    .group(macarraoByMonthGroup, 'Macarrão Espaguete')
                    .ordinalColors(['sienna']),
                  ])
  dc.renderAll()
  return view      
}
);
  main.variable(observer()).define(["md"], function(md){return(
md` <h2> Sessão 2: Sazionalidade </h2>
<p> Como alguns produtos se comportam durante o ano? As frutas mudam de preço no período de colheita? A venda de bebida alcólica sofre sazionalidade por algum fator? </p>`
)});
  main.variable(observer("frutas")).define("frutas", ["md","container","dc","d3","dateDim3","abacateByMonthGroup","abacaxiByMonthGroup","laranjaByMonthGroup","tomateByMonthGroup","limaoByMonthGroup"], function(md,container,dc,d3,dateDim3,abacateByMonthGroup,abacaxiByMonthGroup,laranjaByMonthGroup,tomateByMonthGroup,limaoByMonthGroup)
{
  let view = md`${container('chart3', 'Frutas')}`
  let compositeChart = dc.compositeChart(view.querySelector("#chart3"))
  let xScale = d3.scaleTime()
                  .domain([dateDim3.bottom(1)[0].date, dateDim3.top(1)[0].date])
  compositeChart.width(800)
              .height(400)
              .margins({top: 50, right: 60, bottom: 25, left: 40})
              .dimension(dateDim3)
              .x(xScale)
              .xUnits(d3.timeDays)
              .renderHorizontalGridLines(true)
              .legend(dc.legend().x(740).y(5).itemHeight(13).gap(5))
              .brushOn(false)
              .compose([
                  dc.lineChart(compositeChart)
                    .group(abacateByMonthGroup, 'Abacate')
                    .ordinalColors(['Green']),
                  dc.lineChart(compositeChart)
                    .group(abacaxiByMonthGroup, 'Abacaxi')
                    .ordinalColors(['Yellow']),
                  dc.lineChart(compositeChart)
                    .group(laranjaByMonthGroup, 'Laranja')
                    .ordinalColors(['orange']),
                  dc.lineChart(compositeChart)
                    .group(tomateByMonthGroup, 'Tomate')
                    .ordinalColors(['red']),
                  dc.lineChart(compositeChart)
                    .group(limaoByMonthGroup, 'Limão')
                    .ordinalColors(['lime']),
              ])
  dc.renderAll()
  return view      
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`<p> Nesse gráfico conseguimos ver que os preços das frutas sofrem bastante da sazionalidade. O abacate, por exemplo, tem os seus menores preços nos períodos de Feveriro a Abril, justamente no tempo de colheita deste fruto.</p>`
)});
  main.variable(observer("cerveja")).define("cerveja", ["md","container","dc","d3","dateDim4","QtdCervejaByDayGroup"], function(md,container,dc,d3,dateDim4,QtdCervejaByDayGroup)
{
  let view = md`${container('chart4', 'Consumo de Cerveja no Mês de Maio de 2019')}`
  let barChart = dc.barChart(view.querySelector("#chart4"))
  let xScale = d3.scaleLinear()
                  .domain([dateDim4.bottom(1)[0].Dia-1, 32])
  barChart
    .width(900).height(400).dimension(dateDim4)
    .margins({top: 30, right: 30, bottom: 25, left: 40})
    .x(xScale)
    .renderHorizontalGridLines(true)
    .legend(dc.legend().x(550).y(10).itemHeight(13).gap(5))
    .brushOn(false)
    .group(QtdCervejaByDayGroup, "Quantidade de Latinhas Vendidas")
    .xAxis().tickFormat(d3.format("d"))
  barChart.centerBar(true)
  barChart.gap(5)
  barChart.render()
  return view      
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`<p> Já no consumo de bebida alcólica, podemos observar alguns picos. Eles ocorrem nos finais de semana (sexta, sabado e domingo) e feriados (01/05 - Dia do Trabalho), por motivos óbvios. :) </p>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md` <h2> Sessão 3: Associações </h2>
<p> Quais são as associações entre produtos, ou seja, quando um produto é comprado, qual é o outro produto que tem a maior probabilidade de ser comprado junto? Pra entender melhor essa relação de consumo, rodamos um Apriori sobre um banco de notas fiscais de junho de 2018, vamos ver os resultados. </p>`
)});
  main.variable(observer("buildvis")).define("buildvis", ["d3","DOM","dataset_associacao","drag"], function(d3,DOM,dataset_associacao,drag)
{
  const width = 960
  const height = 800
  
  const svg = d3.select(DOM.svg(width, height))
                .attr("viewBox", [-width / 2, -height / 2, width, height])
  
  // Configure os nodes e os links
  const nodes = dataset_associacao.nodes
  const links = dataset_associacao.links
  const simulation = forceSimulation(nodes,links).on("tick", ticked)
  
  // Crie a constante simulation usando a função forceSimulation definida em outra célula
  function forceSimulation(nodes, links) {
    return d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.produto).distance(50))
      .force("charge", d3.forceManyBody().strength(-50).distanceMax(270))
      .force("center", d3.forceCenter())
  }
  
  //Crie os elementos svg para os links e guarde-os em link
  const link = svg.append("g")
                .selectAll("line")
                .data(links)
                .enter()
                .append("line")
                .attr("class","link");
  
   //Crie os elementos svg para os nodes e guarde-os em node
  let rScale = d3.scaleSqrt().range([2, 20]).domain(d3.extent(nodes, d => d.qt))
  const node = svg.append("g")
                .selectAll("circle")
                .data(nodes)
                .enter()
                .append("circle")
                .attr("class","node")
                .attr("r", d => rScale(d.qt))
                .call(drag(simulation));
  node.append("title")
    .text(function (d) {
      return d.produto + ": " + d.qt;
    })
  
  // Defina a função ticked
  function ticked() {
    link.attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y)
    
    node.attr("cx", d => d.x)
    node.attr("cy", d => d.y)
  }
  
  // Once we append the vis elments to it, we return the DOM element for Observable to display above.
  return svg.node()
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`<p> Algumas relações bem interessantes podem ser descobertas, por exemplo, a associação entre coentro e cebolinha que é o cheiro-verde, ou a associação entre cerveja e saco de gelo. Informações como essa podem ser fundamentais para montagem de gôndolas de supermercado, visando alcançar máxima eficiência. </p>`
)});
  main.variable(observer("dataset_associacao")).define("dataset_associacao", ["d3"], function(d3){return(
d3.json("https://raw.githubusercontent.com/matheusBarrio/TraVis_Supermercado/master/Dados/conjunto.json")
)});
  main.variable(observer("drag")).define("drag", ["d3"], function(d3){return(
function drag(simulation){
function dragstarted(d) {
if (!d3.event.active) simulation.alphaTarget(0.3).restart()
d.fx = d.x
d.fy = d.y
}

function dragged(d) {
d.fx = d3.event.x
d.fy = d3.event.y
}

function dragended(d) {
if (!d3.event.active) simulation.alphaTarget(0)
d.fx = null
d.fy = null
}

return d3.drag()
.on("start", dragstarted)
.on("drag", dragged)
.on("end", dragended)
}
)});
  main.variable(observer("dataset")).define("dataset", ["d3"], function(d3){return(
d3.csv("https://raw.githubusercontent.com/matheusBarrio/TraVis_Supermercado/master/Dados/cesta_basica.csv").then(function(data){
  // formatando nossos dados
  let parseDate = d3.timeParse("%d/%m/%Y")
  data.forEach(function(d,i){
       d.date = parseDate(d.Data)
       d.cesta_basica = +d.cesta_basica
       d.ipca = +d.ipca
   })
  return data
})
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3")
)});
  main.variable(observer()).define(["html"], function(html){return(
html`Esta célula contém os estilos da visualização.
<style>
line.link {
  fill: none;
  stroke: #ddd;
  stroke-opacity: 0.8;
  stroke-width: 1.5px;
}
<style>`
)});
  main.variable(observer("cestaBasicaByMonthGroup")).define("cestaBasicaByMonthGroup", ["dateDim"], function(dateDim){return(
dateDim.group().reduceSum(d => d.cesta_basica)
)});
  main.variable(observer("ipcaByMonthGroup")).define("ipcaByMonthGroup", ["dateDim"], function(dateDim){return(
dateDim.group().reduceSum(d => d.ipca)
)});
  main.variable(observer("facts")).define("facts", ["crossfilter","dataset"], function(crossfilter,dataset){return(
crossfilter(dataset)
)});
  main.variable(observer()).define(["html"], function(html){return(
html`Esta célula inclui o css do dc.
<style>
.dc-chart path.dc-symbol, .dc-legend g.dc-legend-item.fadeout {
  fill-opacity: 0.5;
  stroke-opacity: 0.5; }

.dc-chart rect.bar {
  stroke: none;
  cursor: pointer; }
  .dc-chart rect.bar:hover {
    fill-opacity: .5; }

.dc-chart rect.deselected {
  stroke: none;
  fill: #ccc; }

.dc-chart .pie-slice {
  fill: #fff;
  font-size: 12px;
  cursor: pointer; }
  .dc-chart .pie-slice.external {
    fill: #000; }
  .dc-chart .pie-slice :hover, .dc-chart .pie-slice.highlight {
    fill-opacity: .8; }

.dc-chart .pie-path {
  fill: none;
  stroke-width: 2px;
  stroke: #000;
  opacity: 0.4; }

.dc-chart .selected path, .dc-chart .selected circle {
  stroke-width: 3;
  stroke: #ccc;
  fill-opacity: 1; }

.dc-chart .deselected path, .dc-chart .deselected circle {
  stroke: none;
  fill-opacity: .5;
  fill: #ccc; }

.dc-chart .axis path, .dc-chart .axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges; }

.dc-chart .axis text {
  font: 10px sans-serif; }

.dc-chart .grid-line, .dc-chart .axis .grid-line, .dc-chart .grid-line line, .dc-chart .axis .grid-line line {
  fill: none;
  stroke: #ccc;
  shape-rendering: crispEdges; }

.dc-chart .brush rect.selection {
  fill: #4682b4;
  fill-opacity: .125; }

.dc-chart .brush .custom-brush-handle {
  fill: #eee;
  stroke: #666;
  cursor: ew-resize; }

.dc-chart path.line {
  fill: none;
  stroke-width: 1.5px; }

.dc-chart path.area {
  fill-opacity: .3;
  stroke: none; }

.dc-chart path.highlight {
  stroke-width: 3;
  fill-opacity: 1;
  stroke-opacity: 1; }

.dc-chart g.state {
  cursor: pointer; }
  .dc-chart g.state :hover {
    fill-opacity: .8; }
  .dc-chart g.state path {
    stroke: #fff; }

.dc-chart g.deselected path {
  fill: #808080; }

.dc-chart g.deselected text {
  display: none; }

.dc-chart g.row rect {
  fill-opacity: 0.8;
  cursor: pointer; }
  .dc-chart g.row rect:hover {
    fill-opacity: 0.6; }

.dc-chart g.row text {
  fill: #fff;
  font-size: 12px;
  cursor: pointer; }

.dc-chart g.dc-tooltip path {
  fill: none;
  stroke: #808080;
  stroke-opacity: .8; }

.dc-chart g.county path {
  stroke: #fff;
  fill: none; }

.dc-chart g.debug rect {
  fill: #00f;
  fill-opacity: .2; }

.dc-chart g.axis text {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none; }

.dc-chart .node {
  font-size: 0.7em;
  cursor: pointer; }
  .dc-chart .node :hover {
    fill-opacity: .8; }

.dc-chart .bubble {
  stroke: none;
  fill-opacity: 0.6; }

.dc-chart .highlight {
  fill-opacity: 1;
  stroke-opacity: 1; }

.dc-chart .fadeout {
  fill-opacity: 0.2;
  stroke-opacity: 0.2; }

.dc-chart .box text {
  font: 10px sans-serif;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none; }

.dc-chart .box line {
  fill: #fff; }

.dc-chart .box rect, .dc-chart .box line, .dc-chart .box circle {
  stroke: #000;
  stroke-width: 1.5px; }

.dc-chart .box .center {
  stroke-dasharray: 3, 3; }

.dc-chart .box .data {
  stroke: none;
  stroke-width: 0px; }

.dc-chart .box .outlier {
  fill: none;
  stroke: #ccc; }

.dc-chart .box .outlierBold {
  fill: red;
  stroke: none; }

.dc-chart .box.deselected {
  opacity: 0.5; }
  .dc-chart .box.deselected .box {
    fill: #ccc; }

.dc-chart .symbol {
  stroke: none; }

.dc-chart .heatmap .box-group.deselected rect {
  stroke: none;
  fill-opacity: 0.5;
  fill: #ccc; }

.dc-chart .heatmap g.axis text {
  pointer-events: all;
  cursor: pointer; }

.dc-chart .empty-chart .pie-slice {
  cursor: default; }
  .dc-chart .empty-chart .pie-slice path {
    fill: #fee;
    cursor: default; }

.dc-data-count {
  float: right;
  margin-top: 15px;
  margin-right: 15px; }
  .dc-data-count .filter-count, .dc-data-count .total-count {
    color: #3182bd;
    font-weight: bold; }

.dc-legend {
  font-size: 11px; }
  .dc-legend .dc-legend-item {
    cursor: pointer; }

.dc-hard .number-display {
  float: none; }

div.dc-html-legend {
  overflow-y: auto;
  overflow-x: hidden;
  height: inherit;
  float: right;
  padding-right: 2px; }
  div.dc-html-legend .dc-legend-item-horizontal {
    display: inline-block;
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer; }
    div.dc-html-legend .dc-legend-item-horizontal.selected {
      background-color: #3182bd;
      color: white; }
  div.dc-html-legend .dc-legend-item-vertical {
    display: block;
    margin-top: 5px;
    padding-top: 1px;
    padding-bottom: 1px;
    cursor: pointer; }
    div.dc-html-legend .dc-legend-item-vertical.selected {
      background-color: #3182bd;
      color: white; }
  div.dc-html-legend .dc-legend-item-color {
    display: table-cell;
    width: 12px;
    height: 12px; }
  div.dc-html-legend .dc-legend-item-label {
    line-height: 12px;
    display: table-cell;
    vertical-align: middle;
    padding-left: 3px;
    padding-right: 3px;
    font-size: 0.75em; }

.dc-html-legend-container {
  height: inherit; }
</style>`
)});
  main.variable(observer("dateDim")).define("dateDim", ["facts"], function(facts){return(
facts.dimension( d => d.date)
)});
  main.variable(observer("crossfilter")).define("crossfilter", ["require"], function(require){return(
require("crossfilter2")
)});
  main.variable(observer("dc")).define("dc", ["require"], function(require){return(
require("dc")
)});
  main.variable(observer("container")).define("container", function(){return(
function container(id, title) { 
  return `
<div class='container'>
<div class='content'>
<div class='container'>
<div class='row'>
    <div class='span12' id='${id}'>
      <h4>${title}</h4>
    </div>
  </div>
</div>
</div>
</div>`
}
)});
  main.variable(observer("dataset_prod_cesta")).define("dataset_prod_cesta", ["d3"], function(d3){return(
d3.csv("https://raw.githubusercontent.com/matheusBarrio/TraVis_Supermercado/master/Dados/produtos_cesta.csv").then(function(data){
  // formatando nossos dados
  let parseDate = d3.timeParse("%d/%m/%Y")
  data.forEach(function(d,i){
       d.date = parseDate(d.Data)
       d.produto = d.Produto
       d.preco_medio = +d.preço_medio
   })
  return data
})
)});
  main.variable(observer("arrozByMonthGroup")).define("arrozByMonthGroup", ["dateDim2"], function(dateDim2){return(
dateDim2.group().reduceSum(function(d) {
    if(d.produto == "ARROZ PARB CAMIL 1KG") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("salByMonthGroup")).define("salByMonthGroup", ["dateDim2"], function(dateDim2){return(
dateDim2.group().reduceSum(function(d) {
    if(d.produto == "SAL SOSAL 1KG MOIDO") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("vinagreByMonthGroup")).define("vinagreByMonthGroup", ["dateDim2"], function(dateDim2){return(
dateDim2.group().reduceSum(function(d) {
    if(d.produto == "VINAGRE ROSANI 500ML ARROZ") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("acucarByMonthGroup")).define("acucarByMonthGroup", ["dateDim2"], function(dateDim2){return(
dateDim2.group().reduceSum(function(d) {
    if(d.produto == "ACUCAR CRISTAL UNIAO 1KG CRISTALCUCAR") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("feijaoByMonthGroup")).define("feijaoByMonthGroup", ["dateDim2"], function(dateDim2){return(
dateDim2.group().reduceSum(function(d) {
    if(d.produto == "FEIJAO CARIOCA FIBRA 1KG") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("facts2")).define("facts2", ["crossfilter","dataset_prod_cesta"], function(crossfilter,dataset_prod_cesta){return(
crossfilter(dataset_prod_cesta)
)});
  main.variable(observer("dataset_frutas")).define("dataset_frutas", ["d3"], function(d3){return(
d3.csv("https://raw.githubusercontent.com/matheusBarrio/TraVis_Supermercado/master/Dados/frutas.csv").then(function(data){
  // formatando nossos dados
  let parseDate = d3.timeParse("%Y-%m-%d")
  data.forEach(function(d,i){
       d.date = parseDate(d.ano_mes)
       d.produto = d.Produto
       d.preco_medio = +d.preço_medio
   })
  return data
})
)});
  main.variable(observer("facts3")).define("facts3", ["crossfilter","dataset_frutas"], function(crossfilter,dataset_frutas){return(
crossfilter(dataset_frutas)
)});
  main.variable(observer("dateDim3")).define("dateDim3", ["facts3"], function(facts3){return(
facts3.dimension( d => d.date)
)});
  main.variable(observer("abacaxiByMonthGroup")).define("abacaxiByMonthGroup", ["dateDim3"], function(dateDim3){return(
dateDim3.group().reduceSum(function(d) {
    if(d.produto == "ABACAXI UND") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("tomateByMonthGroup")).define("tomateByMonthGroup", ["dateDim3"], function(dateDim3){return(
dateDim3.group().reduceSum(function(d) {
    if(d.produto == "TOMATE KG") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("dataset_cerveja")).define("dataset_cerveja", ["d3"], function(d3){return(
d3.csv("https://raw.githubusercontent.com/matheusBarrio/TraVis_Supermercado/master/Dados/cerveja.csv").then(function(data){
  // formatando nossos dados
  let parseDate = d3.timeParse("%d")
  data.forEach(function(d,i){
       d.date = parseDate(d.Dia)
       d.produto = d.Produto
       d.qt = +d.QTDITEM
   })
  return data
})
)});
  main.variable(observer("facts4")).define("facts4", ["crossfilter","dataset_cerveja"], function(crossfilter,dataset_cerveja){return(
crossfilter(dataset_cerveja)
)});
  main.variable(observer("dateDim4")).define("dateDim4", ["facts4"], function(facts4){return(
facts4.dimension( d => d.Dia)
)});
  main.variable(observer("cafeByMonthGroup")).define("cafeByMonthGroup", ["dateDim2"], function(dateDim2){return(
dateDim2.group().reduceSum(function(d) {
    if(d.produto == "CAFE PILAO 250G ORIGINAL") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("QtdCervejaByDayGroup")).define("QtdCervejaByDayGroup", ["dateDim4"], function(dateDim4){return(
dateDim4.group().reduceSum(d => d.qt)
)});
  main.variable(observer("laranjaByMonthGroup")).define("laranjaByMonthGroup", ["dateDim3"], function(dateDim3){return(
dateDim3.group().reduceSum(function(d) {
    if(d.produto == "LARANJA PERA KG") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("dateDim2")).define("dateDim2", ["facts2"], function(facts2){return(
facts2.dimension( d => d.date)
)});
  main.variable(observer("milhoByMonthGroup")).define("milhoByMonthGroup", ["dateDim2"], function(dateDim2){return(
dateDim2.group().reduceSum(function(d) {
    if(d.produto == "MILHO VERDE PREDILECTA 200G SACHET") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("crDentalByMonthGroup")).define("crDentalByMonthGroup", ["dateDim2"], function(dateDim2){return(
dateDim2.group().reduceSum(function(d) {
    if(d.produto == "CR DENTAL ORAL B 70G 123 MENTA") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("abacateByMonthGroup")).define("abacateByMonthGroup", ["dateDim3"], function(dateDim3){return(
dateDim3.group().reduceSum(function(d) {
    if(d.produto == "ABACATE KG") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("queijoByMonthGroup")).define("queijoByMonthGroup", ["dateDim2"], function(dateDim2){return(
dateDim2.group().reduceSum(function(d) {
    if(d.produto == "QUEIJO RALADO QUATA 50G") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("macarraoByMonthGroup")).define("macarraoByMonthGroup", ["dateDim2"], function(dateDim2){return(
dateDim2.group().reduceSum(function(d) {
    if(d.produto == "MAC ESPAGUETE FORTALEZA C OVOS 500G") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("oleoByMonthGroup")).define("oleoByMonthGroup", ["dateDim2"], function(dateDim2){return(
dateDim2.group().reduceSum(function(d) {
    if(d.produto == "OLEO DE SOJA SOYA 900ML") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("toddyByMonthGroup")).define("toddyByMonthGroup", ["dateDim2"], function(dateDim2){return(
dateDim2.group().reduceSum(function(d) {
    if(d.produto == "ACHOC PO TODDY 200G") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("fubaByMonthGroup")).define("fubaByMonthGroup", ["dateDim2"], function(dateDim2){return(
dateDim2.group().reduceSum(function(d) {
    if(d.produto == "FUBA YOKI 500G PRE-COZIDO") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("limaoByMonthGroup")).define("limaoByMonthGroup", ["dateDim3"], function(dateDim3){return(
dateDim3.group().reduceSum(function(d) {
    if(d.produto == "LIMAO TAHITI KG") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("saboneteByMonthGroup")).define("saboneteByMonthGroup", ["dateDim2"], function(dateDim2){return(
dateDim2.group().reduceSum(function(d) {
    if(d.produto == "SAB PROTEX 85G LIMP PROFUNDA") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("maioneseByMonthGroup")).define("maioneseByMonthGroup", ["dateDim2"], function(dateDim2){return(
dateDim2.group().reduceSum(function(d) {
    if(d.produto == "MAIONESE QUERO 200G SACHET") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("frangoByMonthGroup")).define("frangoByMonthGroup", ["dateDim2"], function(dateDim2){return(
dateDim2.group().reduceSum(function(d) {
    if(d.produto == "FRANGO RESF REGINA KG IN NATURA") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("creamcrackerByMonthGroup")).define("creamcrackerByMonthGroup", ["dateDim2"], function(dateDim2){return(
dateDim2.group().reduceSum(function(d) {
    if(d.produto == "BISC CREAM CRACKER FORT 400G ESP INTEGRAL") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("carneByMonthGroup")).define("carneByMonthGroup", ["dateDim2"], function(dateDim2){return(
dateDim2.group().reduceSum(function(d) {
    if(d.produto == "CARNE MOIDA FRIBAL BDJ KG") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("leiteByMonthGroup")).define("leiteByMonthGroup", ["dateDim2"], function(dateDim2){return(
dateDim2.group().reduceSum(function(d) {
    if(d.produto == "LEITE L V BETANIA 1L INTEGRAL") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("molhoTomateByMonthGroup")).define("molhoTomateByMonthGroup", ["dateDim2"], function(dateDim2){return(
dateDim2.group().reduceSum(function(d) {
    if(d.produto == "MOLHO DE TOMATE POMAROLA 340G SACHE") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("ovosByMonthGroup")).define("ovosByMonthGroup", ["dateDim2"], function(dateDim2){return(
dateDim2.group().reduceSum(function(d) {
    if(d.produto == "OVOS BRANCOS AVINE GDE C 30") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("ervilhaByMonthGroup")).define("ervilhaByMonthGroup", ["dateDim2"], function(dateDim2){return(
dateDim2.group().reduceSum(function(d) {
    if(d.produto == "ERVILHA PREDILECTA 200G SACHET") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  main.variable(observer("miojoByMonthGroup")).define("miojoByMonthGroup", ["dateDim2"], function(dateDim2){return(
dateDim2.group().reduceSum(function(d) {
    if(d.produto == "MAC INSTAN NISSIN TALHARIM 99G CARNE C TO") {
      return d.preco_medio
    }  
    else {
      return 0
    }
})
)});
  return main;
}
