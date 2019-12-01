// https://observablehq.com/@abeyang/globals@1196
import define1 from "./576f8943dbfbd395@109.js";
import define2 from "./8d271c22db968ab0@155.js";
import define3 from "./a0671a9883261b36@33.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# globals`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## "One Page to Rule Them All"
This page is meant to serve as the "global functions" that drive all other charts.
Tweaking the settings / functions here will affect other charts (assuming they're importing directly from this page).`
)});
  main.variable(observer("chart")).define("chart", ["data","d3","DOM","globals","chartGen"], function(data,d3,DOM,globals,chartGen)
{
  
var chartinfo = {
    showMargins: false, // for visual debugging
    height: 562,        // this needs to be adjusted manually (for now)
    title: "Support or Oppose Right to Privacy at State Level",
    sub: "Which of the following best represents your level of support or opposition to this type of constitutional protection in your state?",
    footer: 'Survey of 1182 U.S. adults (Dec 2018)',
    info: {
      type: "pie",
      order: "pos-neutral-neg",
      legend: "default"
    },
    data: data, // remember to use YOUR dataset here

  // DO NOT EDIT BELOW THIS LINE
    sub_y: 0, 
    main_y: 0
  }

  const svg = d3.select(DOM.svg(globals.width, chartinfo.height))
      .style("background-color", globals.color.offwhite);
  
  // let's generate the chart!
  chartGen(svg, chartinfo);

  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md `### Things specific to this chart`
)});
  main.variable(observer()).define(["html","DOM","serialize","chart","rasterize"], function(html,DOM,serialize,chart,rasterize){return(
html`
  ${DOM.download(serialize(chart), 'chart', 'Download as SVG')}
  ${DOM.download(rasterize(chart), 'chart', 'Download as PNG')}
`
)});
  main.variable(observer("data")).define("data", ["d3"], function(d3){return(
d3.csv("https://gist.githubusercontent.com/abeyang/482ffd0faa28b55b248b6c576613c961/raw/abd97ebfc9b925abcca3b61947553fe4f2b3075a/Privacy-at-state-level.csv")
)});
  main.variable(observer()).define(["md"], function(md){return(
md `### Chart generators`
)});
  main.variable(observer("chartGen")).define("chartGen", ["setup","pieGen"], function(setup,pieGen){return(
function(svg, chartinfo) {
  
  // set up placeholders and layouts
  setup(svg, chartinfo);

  // Currently, there's only a pie chart generator...
  pieGen(svg, chartinfo.data, chartinfo.info);
}
)});
  main.variable(observer("pieGen")).define("pieGen", ["d3","globals"], function(d3,globals){return(
function(svg, data, info = {order: "pos-neutral-neg", legend: "default"}) {
  var graphcolor;
  console.log(info);

  // info.order:
  // - pos-neutral-neg: positive to neutral to negative (DEFAULT)
  // - neutral-pos: neutral to positve
  // - neutral-neg: neutral to negative
  switch (info.order) {
    case 'neutral-pos':
      graphcolor = d3.scaleLinear()
            .domain([0, data.length-1])
            .range([globals.color.lightgray, globals.color.blue]);
      break;
    case 'neutral-neg':
      graphcolor = d3.scaleLinear()
            .domain([0, data.length-1])
            .range([globals.color.lightgray, globals.color.red]);
      break;
    default:
      graphcolor = d3.scaleLinear()
            .domain([0, (data.length-1) / 2, data.length-1])
            .range([globals.color.blue, globals.color.lightgray, globals.color.red]);
  }
  
  console.log(graphcolor(1));
                                     
  // info.legend (TODO — CURRENTLY DOESN'T DO ANYTHING):
  // - default
  // - long
     
  var main = svg.select('g.main');
   
  var outerRadius = globals.radius;
  var innerRadius = 0;
  var arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);

  var pie = d3.pie()
    .value(d => d.adjusted);

  // Set up groups
  var pieX = outerRadius;
  var pieY = pieX;
   
  // set up chart
    
  var total = d3.sum(data, d => d.adjusted);

  var arcs = main.selectAll("g.arc")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("x", globals.margin + globals.radius)
    .attr("class", "arc")
    .attr("transform", "translate(" + pieX + "," + pieY + ")");

  //Draw arc paths
  arcs.append("path")
      .attr("fill", function(d, i) {
        return graphcolor(i);
      })
      .attr("d", arc);

  // Draw Legend
  var legendInfo = {
    width: globals.width / 2 - globals.margin*2,
    height: data.length * globals.legend_spacing,
    totalheight: globals.radius * 2
  };
  
  legendInfo.x = globals.width - (2 * globals.margin) - legendInfo.width;
  legendInfo.y = (legendInfo.totalheight - legendInfo.height)/2;

  var legendItems = main.selectAll("g.legenditems")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", function(d, i) {
      var offset = legendInfo.y + globals.legend_radius + (i * globals.legend_spacing);
      return "translate(" + legendInfo.x + "," + offset + ")";
    });

  legendItems.append("circle")
    .attr("r", globals.legend_radius)
    .attr("cx", globals.legend_radius)
    .attr("cy", -1)
    .attr("fill", function(d, i) {
        return graphcolor(i);
      });

  legendItems.append("text")
    .text(d => d.label)
    .attr("dx", globals.margin / 2 + globals.legend_radius) 
    .attr("alignment-baseline", "middle")
    .style("font-size", globals.font.default.size)
    .style("fill", globals.color.slate);

  legendItems.append("text")
    .text(d => d3.format(".2%")(d.adjusted / total))
    .attr("dx", legendInfo.width)
    .attr("alignment-baseline", "middle")
    .attr("text-anchor", "end")
    .style("font-size", globals.font.default.size)
    .style("fill", globals.color.slate);
  
  return svg.node();
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md `### Helper functions`
)});
  main.variable(observer("globals")).define("globals", ["toDataURL"], async function(toDataURL){return(
{
  font: {
    // name: "Nunito Sans",
    // url: "https://fonts.googleapis.com/css?family=Nunito+Sans",
    name: "PN",
    url_h1: await toDataURL('https://use.typekit.net/af/949f99/00000000000000003b9b3068/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3'),
    url_h2: await toDataURL("https://use.typekit.net/af/705e94/00000000000000003b9b3062/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3"),
    h1: {
      "weight": 700,
      "size": 24,
      "lineheight": 1.1
    },
    h2: {
      "weight": 400,
      "size": 18,
      "lineheight": 1.2
    },
    tiny: {
      "size": 12
    },
    default: {
      "size": 18,
      "lineheight": 1.2
    }
  },
  color: {
    blue: "#5779DA",
    red: "#DE5833",
    pink: "#E74C58",
    gold: "#FDD207",
    green: "#70BF5C",
    purple: "#391E6D",
    white: "#fff",
    offwhite: "#FAFAFA",
    lightgray: "#ddd",
    gray: "#ccc",
    midgray: '#999',
    slate: "#333",
    black: "#000",
    offset: 0.25
  },
  width: 800,
  margin: 50,
  radius: 150,
  footer: 30,
  ad_padding: 20,
  table_padding: 10,
  logo_radius: 8,
  legend_radius: 8,
  legend_spacing: 30,
  brand: 'DuckDuckGo'
}
)});
  main.variable(observer("setup")).define("setup", ["styles","globals","wrap","DDGLogo"], function(styles,globals,wrap,DDGLogo){return(
function(svg, chartinfo) {
  
  styles(svg);
  
  // Create CONTENT area (everything inside the margins, not including footer)

  var content = svg.append("g")
    .attr("class", "content")
    .attr("transform", "translate(" + globals.margin + "," + globals.margin + ")");
  
  // Create HEADER inside content
  var header = content.append("g")
    .attr("class", "header");
  
  header.append("text")
    .text(chartinfo.title)
    .attr("class", "title")
    .attr("dy", 0)
    .attr("alignment-baseline", "hanging")
    .style("font-size", globals.font.h1.size)
    .style("line-height", globals.font.h1.lineheight)
    .style("font-weight", globals.font.h1.weight)
    .style("fill", globals.color.slate)
    .call(wrap, 280, globals.font.h1.size); // not sure why it's this number...
  
  var subheader = content.append("g")
    .attr("class", "subheader");
  
  subheader.append("text")
    .text(chartinfo.sub)
    .attr("class", "subtitle")
    .attr("dy", 0)
    .attr("alignment-baseline", "hanging")
    .style("font-size", globals.font.h2.size)
    .style("line-height", globals.font.h2.lineheight)
    .style("fill", globals.color.slate)
    .call(wrap, globals.width/2); // not sure why it's this number...
  
  // Create MAIN inside content
  // This is where the charts and legends will reside; just a placeholder here
  
  var main = content.append("g")
    .attr("class", "main");
  
  // Create FOOTER
  
  var footer_y = chartinfo.height - globals.footer;
  var text_offset = 1;
  var footer_text_y = globals.footer/2 + text_offset;
  
  var footer = svg.append("g")
    .attr("class", "footer")
    .attr("transform", "translate(0," + footer_y + ")");
  
  // TODO: need subtle line
  
  footer.append("rect")
      .attr("width", "100%")
      .attr("height", globals.footer)
      .style("fill", globals.color.white)
  
  var logosize = globals.logo_radius * 2;
  var logo_y = (globals.footer - logosize)/2;
  footer.append("g")
      .attr("class", "DDG Logo")
      .attr("transform", "translate(" + globals.margin + "," + logo_y + ")")
      .html(DDGLogo.xml);
  
  footer.append("text")
      .text(globals.brand)
      .attr("dy", footer_text_y)
      .attr("dx", globals.margin + globals.logo_radius*3)
      .attr("alignment-baseline", "middle")
      .style("font-size", globals.font.tiny.size)
      .style("fill", globals.color.midgray);
  
  // alignment and baseline: https://bl.ocks.org/emmasaunders/0016ee0a2cab25a643ee9bd4855d3464
  footer.append("text")
      .text(chartinfo.footer)
      .attr("dy", footer_text_y)
      .attr("dx", globals.width - globals.margin)
      .attr("text-anchor", "end")
      .attr("alignment-baseline", "middle")
      .style("font-size", globals.font.tiny.size)
      .style("fill", globals.color.midgray);
  
  // Calculate positions for newly created elements
  
  // create temp node — necessary for getBBox(); will remove this later
  document.body.appendChild(svg.node());  
  
  var title = svg.select('.title').node();
  var titlebox = title.getBBox();
  
  var subtitle = svg.select('.subtitle').node();
  var subtitlebox = subtitle.getBBox();
  
  chartinfo.sub_y = titlebox.height + globals.font.h2.size/2;
  var subheader = svg.select('.subheader');
  subheader.attr('transform', "translate(0," + chartinfo.sub_y + ")");
  
  chartinfo.main_y = chartinfo.sub_y + subtitlebox.height + globals.margin;
  main.attr('transform', "translate(0," + chartinfo.main_y + ")");
  
  document.body.removeChild(svg.node());
  
  // Create MARGINS (useful for debugging)
  if (chartinfo.showMargins) {
    var borders = svg.append("g")
      .attr("class", "borders");

    borders.append("rect")
      .attr("width", "100%")
      .attr("height", globals.margin)
      .style("fill", globals.color.purple)
      .style("opacity", 0.5);

    borders.append("rect")
      .attr("width", globals.margin)
      .attr("height", "100%")
      .style("fill", globals.color.purple)
      .style("opacity", 0.5);

    borders.append("rect")
      .attr("x", globals.width - globals.margin)
      .attr("width", globals.margin)
      .attr("height", "100%")
      .style("fill", globals.color.purple)
      .style("opacity", 0.5);

    borders.append("rect")
      .attr("y", chartinfo.height - globals.margin - globals.footer) // account for footer
      .attr("width", "100%")
      .attr("height", globals.margin)
      .style("fill", globals.color.purple)
      .style("opacity", 0.5);
    
    borders.append("rect")
      .attr("y", chartinfo.main_y) 
      .attr("width", "100%")
      .attr("height", globals.margin)
      .style("fill", globals.color.purple)
      .style("opacity", 0.5);

  }
  
  return svg.node();
}
)});
  main.variable(observer("styles")).define("styles", ["globals"], function(globals){return(
function(svg) {
  // Embed styles & fonts within the SVG
  svg.append("defs").append("style")
    .attr("type", "text/css")
    .text("@font-face{ src: url(" + globals.font.url_h1 + ") format('truetype'); font-family: " + globals.font.name + "; font-weight:700 } @font-face{ src: url(" + globals.font.url_h2 + ") format('truetype'); font-family: " + globals.font.name + "; font-weight:400 }  text {display: block; font-family: " + globals.font.name + ";}");
}
)});
  main.variable(observer("wrap")).define("wrap", ["globals","d3","measureWidth"], function(globals,d3,measureWidth){return(
function wrap(text, width, fontSize = globals.font.h2.size) {
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        baseline = text.attr('alignment-baseline'),
        lineHeight = text.style('line-height'),
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy).attr('alignment-baseline', baseline);
    
    // console.log(fontSize * lineHeight);
    
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));

      if (measureWidth(tspan.text()) > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        ++lineNumber;
        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", fontSize * lineHeight).text(word).attr('alignment-baseline', baseline);
      }
    }
  });
}
)});
  main.variable(observer("measureWidth")).define("measureWidth", function()
{
  const context = document.createElement("canvas").getContext("2d");
  
  return text => context.measureText(text).width;
  // return text => context.measureText(text);
}
);
  main.variable(observer("rasterize")).define("rasterize", ["DOM","serialize"], function(DOM,serialize){return(
function rasterize(svg, scale = 1) { // change scale to 2 otherwise...
  let resolve, reject;
  const promise = new Promise((y, n) => (resolve = y, reject = n));
  const image = new Image;
  image.onerror = reject;
  image.onload = () => {
    const rect = svg.getBoundingClientRect();
    const context = DOM.context2d(scale*rect.width, scale*rect.height);
    context.drawImage(image, 0, 0, scale*rect.width, scale*rect.height);
    context.canvas.toBlob(resolve);
  };
  image.src = URL.createObjectURL(serialize(svg));
  return promise;
}
)});
  main.variable(observer("toDataURL")).define("toDataURL", function(){return(
async function toDataURL(url) {
  return new Promise(async(resolve, reject) => {
    const res = await fetch(url);
    if(!res.ok) return reject(`Error: ${res.status} ${res.statusText}`);
    const blob = await res.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => resolve(reader.result);
  });
}
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@5")
)});
  main.variable(observer()).define(["md"], function(md){return(
md `### To-Do List

- ✅Import DDG font
- ✅Make it fully downloadable as PNG (fonts and all)
- ✅Dynamic text-wrap (both title, subs, labels inside legends). Check out [block on text wrapping](https://bl.ocks.org/mbostock/7555321) and [D3plus](https://github.com/d3plus/d3plus-text) and [this utility](https://beta.observablehq.com/@pallada-92/visualization-utilities)
  - this [info](https://bl.ocks.org/MSCAU/58bba77cdcae42fc2f44) might be useful, as well as [text inside circle](https://beta.observablehq.com/@mbostock/fit-text-to-circle)
  - [why getBBox doesn't work](https://talk.observablehq.com/t/getbbox/1222), and the [workaround](https://beta.observablehq.com/@mbostock/autosize-svg)
- ✔️Legend
  - ✅Close the gap between dot and text
  - Account for med + two-line text
- ✅Dynamic color range
- ✔️Account for different types of pie charts
  - Single point (https://cl.ly/e4d954f57861)
  - ✅Positve to negative, no neutral (https://cl.ly/677b137e20c5)
  - Aggregate positive (https://cl.ly/cbc0288096f0)
- ✅Templatize the charts
- ✅Refactor code — consolidate functions
- Look into [other fonts](https://www.typography.com/blog/fonts-for-complex-data) for data/charts
  - [Interstate Mono](https://cl.ly/52d95326ebeb) looks nice
- ✅Embed DDG logo
- Dynamic height for graphic 
  - (might be tricky, esp. if "main" is dynamic..)
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `### Ignore these`
)});
  main.variable(observer("colorAdj")).define("colorAdj", ["d3"], function(d3){return(
function(color, offset) {
  color = d3.hsl(color);
  
  if (offset < 0) return color.darker(-offset);
  else return color.brighter(offset);
}
)});
  main.variable(observer("palette")).define("palette", ["DOM","colorAdj"], function(DOM,colorAdj){return(
function palette(color, offset = 0.25) {
  const canvas = DOM.canvas(6, 1);
  const context = canvas.getContext("2d");
  canvas.style.margin = "0 -14px";
  canvas.style.width = "calc(100% + 28px)";
  canvas.style.height = "40px";
  canvas.style.imageRendering = "pixelated";
  
  // color = d3.hsl(color);
  context.fillStyle = colorAdj(color, offset*2);
  context.fillRect(0, 0, 1, 1);
  context.fillStyle = colorAdj(color, offset);
  context.fillRect(1, 0, 1, 1);
  context.fillStyle = color;
  context.fillRect(2, 0, 1, 1);
  context.fillRect(3, 0, 1, 1);
  context.fillStyle = colorAdj(color, -offset);
  context.fillRect(4, 0, 1, 1);
  context.fillStyle = colorAdj(color, -offset*2);
  context.fillRect(5, 0, 1, 1);
  
  // for (let i = 0; i < n; ++i) {
  //   context.fillStyle = color(i / (n - 1));
  //   context.fillRect(i, 0, 1, 1);
  // }
  return canvas;
}
)});
  main.variable(observer()).define(["palette","globals"], function(palette,globals){return(
palette(globals.color.red)
)});
  main.variable(observer()).define(["palette","globals"], function(palette,globals){return(
palette(globals.color.blue)
)});
  main.variable(observer()).define(["md"], function(md){return(
md `### Imports`
)});
  const child1 = runtime.module(define1);
  main.import("serialize", child1);
  const child2 = runtime.module(define2);
  main.import("form", child2);
  const child3 = runtime.module(define3);
  main.import("DDGLogo", child3);
  return main;
}
