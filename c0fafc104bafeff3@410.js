// https://observablehq.com/@martien/creative-commons-logos@410
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Creative Commons Logos`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Free Cultural Works`
)});
  main.variable(observer()).define(["banner","definitionOfFreeCulturalWorksLogoNoText"], function(banner,definitionOfFreeCulturalWorksLogoNoText){return(
banner(definitionOfFreeCulturalWorksLogoNoText)
)});
  main.variable(observer()).define(["howToImport","definitionOfFreeCulturalWorksLogoNoText"], function(howToImport,definitionOfFreeCulturalWorksLogoNoText){return(
howToImport({ definitionOfFreeCulturalWorksLogoNoText })
)});
  main.variable(observer()).define(["banner","approvedForFreeCulturalWorks"], function(banner,approvedForFreeCulturalWorks){return(
banner(approvedForFreeCulturalWorks)
)});
  main.variable(observer()).define(["howToImport","approvedForFreeCulturalWorks"], function(howToImport,approvedForFreeCulturalWorks){return(
howToImport({ approvedForFreeCulturalWorks })
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## BY SA`
)});
  main.variable(observer()).define(["banner","ccbysastrip"], function(banner,ccbysastrip){return(
banner(ccbysastrip)
)});
  main.variable(observer()).define(["howToImport","ccbysastrip"], function(howToImport,ccbysastrip){return(
howToImport({ ccbysastrip })
)});
  main.variable(observer()).define(["banner","ccbysablock"], function(banner,ccbysablock){return(
banner(ccbysablock)
)});
  main.variable(observer()).define(["howToImport","ccbysablock"], function(howToImport,ccbysablock){return(
howToImport({ ccbysablock })
)});
  main.variable(observer()).define(["md"], function(md){return(
md`# Assistants`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`\`ƒ banner(logo)\` creates a canvas and paints a logo using the full available width.`
)});
  main.variable(observer("banner")).define("banner", ["d3","DOM","width"], function(d3,DOM,width){return(
function banner(logo) {
  const canvas = d3
    .select(DOM.svg(width, (logo.height * width) / logo.width))
    .attr("viewBox", `0 0 ${logo.width} ${logo.height}`)
    .attr("preserveAspectRatio", "xMinYMin meet");
  canvas.append("svg").html(logo.xml);
  return canvas.node();
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`\`ƒ howToImport({logo})\` generates a string showing you how to import the logo in your notebook.`
)});
  main.variable(observer("howToImport")).define("howToImport", ["gcd","md"], function(gcd,md){return(
function howToImport(logoDict) {
  function getVariableName(unknownVariable) {
    return Object.keys(unknownVariable)[0];
  }
  const logo = logoDict[getVariableName(logoDict)];
  let d = gcd(logo.width, logo.height);
  return md`\`import {${getVariableName(
    logoDict
  )}} from "@martien/creative-commons-logos"
(${logo.width}:${logo.height} (${logo.width / d}:${logo.height / d}))\``;
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`# Logos`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
The Official logo for the [_Definition of Free Cultural Works_](https://en.wikipedia.org/wiki/Definition_of_Free_Cultural_Works) (without text) took a bit of fiddling…
1. Copy [Definition_of_Free_Cultural_Works_logo_notext.svg](https://upload.wikimedia.org/wikipedia/commons/7/78/Definition_of_Free_Cultural_Works_logo_notext.svg)  from wikipedia.
1. Open in Illustrator.
1. Remove all irrelevant layers/groupings (make it a single group at the root).
1. Save it (is about half the size of original (Inkscape).
1. Add the DOM.uid()s for ring_n_, _n_ = 1…7.
1. Let the styles st_n_ refer to ring_n_.toString()
1. Let the linearGradient id="\$\{ring_n_.id\}"
`
)});
  main.variable(observer("definitionOfFreeCulturalWorksLogoNoText")).define("definitionOfFreeCulturalWorksLogoNoText", ["DOM"], function(DOM)
{
  const ring0 = DOM.uid("ring0"),
    ring1 = DOM.uid("ring1"),
    ring2 = DOM.uid("ring2"),
    ring3 = DOM.uid("ring3"),
    ring4 = DOM.uid("ring4"),
    ring5 = DOM.uid("ring5"),
    ring6 = DOM.uid("ring6");

  return {
    width: 219,
    height: 218,

    xml: `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1"
	 id="Free_Cultural_Works_Logo" inkscape:version="0.44.1" sodipodi:docbase="/home/gmaxwell" sodipodi:docname="Official-logo_nt.svg" sodipodi:version="0.32" xmlns:cc="http://web.resource.org/cc/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 219 218"
	 style="enable-background:new 0 0 219 218;" xml:space="preserve">
<style type="text/css">
	.st0{fill:${ring0.toString()};}
	.st1{fill:${ring1.toString()};}
	.st2{fill:${ring2.toString()};}
	.st3{fill:${ring3.toString()};}
	.st4{fill:${ring4.toString()};}
	.st5{fill:${ring5.toString()};}
	.st6{fill:${ring6.toString()};}
</style>
<sodipodi:namedview  bordercolor="#666666" borderopacity="1.0" height="218px" id="base" inkscape:current-layer="layer1" inkscape:cx="376.86644" inkscape:cy="68.220482" inkscape:document-units="px" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:window-height="970" inkscape:window-width="1272" inkscape:window-x="0" inkscape:window-y="24" inkscape:zoom="1" pagecolor="#ffffff" width="219px">
	</sodipodi:namedview>
<linearGradient id="${
      ring0.id
    }" gradientUnits="userSpaceOnUse" x1="-114.6833" y1="298.0204" x2="-77.6833" y2="261.0204" gradientTransform="matrix(2.9189 0 0 -2.9189 325.0676 882.0812)">
	<stop  offset="0" style="stop-color:#FF5959"/>
	<stop  offset="1" style="stop-color:#DF0000"/>
</linearGradient>
<path id="path11693" inkscape:transform-center-x="-39.999955" inkscape:transform-center-y="123.63642" sodipodi:cx="126" sodipodi:cy="155" sodipodi:end="4.712389" sodipodi:rx="37" sodipodi:ry="37" sodipodi:start="0" sodipodi:type="arc" class="st0" d="
	M217.5,109c0,59.6-48.4,108-108,108s-108-48.4-108-108S49.9,1,109.5,1v108H217.5z"/>
<linearGradient id="${
      ring1.id
    }" gradientUnits="userSpaceOnUse" x1="-92.8822" y1="454.1178" x2="-56.4791" y2="490.5209" gradientTransform="matrix(0 2.5019 2.5019 0 -1117.7125 250.3438)">
	<stop  offset="0" style="stop-color:#FFB73D"/>
	<stop  offset="1" style="stop-color:#FFA000"/>
</linearGradient>
<path id="path10806" inkscape:transform-center-x="105.97409" inkscape:transform-center-y="34.28568" sodipodi:cx="126" sodipodi:cy="155" sodipodi:end="4.712389" sodipodi:rx="37" sodipodi:ry="37" sodipodi:start="0" sodipodi:type="arc" class="st1" d="
	M109.5,201.6c-51.1,0-92.6-41.4-92.6-92.6s41.4-92.6,92.6-92.6s92.6,41.4,92.6,92.6h-92.6V201.6z"/>
<linearGradient id="${
      ring2.id
    }" gradientUnits="userSpaceOnUse" x1="-295.9532" y1="479.2902" x2="-327.639" y2="510.976" gradientTransform="matrix(-2.0849 0 0 2.0849 -565.6191 -964.3431)">
	<stop  offset="0" style="stop-color:#FFF18D"/>
	<stop  offset="1" style="stop-color:#FFCD01"/>
</linearGradient>
<path id="path8149" sodipodi:cx="126" sodipodi:cy="155" sodipodi:end="4.712389" sodipodi:rx="37" sodipodi:ry="37" sodipodi:start="0" sodipodi:type="arc" class="st2" d="
	M32.4,109c0-42.6,34.5-77.1,77.1-77.1s77.1,34.5,77.1,77.1s-34.5,77.1-77.1,77.1V109H32.4z"/>
<linearGradient id="${
      ring3.id
    }" gradientUnits="userSpaceOnUse" x1="-340.2845" y1="159.1026" x2="-398.0745" y2="216.8927" gradientTransform="matrix(0 -1.668 -1.668 0 420.9741 -491.895)">
	<stop  offset="0" style="stop-color:#FFFFFF"/>
	<stop  offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/>
</linearGradient>
<path id="path13467" sodipodi:cx="126" sodipodi:cy="155" sodipodi:end="4.712389" sodipodi:rx="37" sodipodi:ry="37" sodipodi:start="0" sodipodi:type="arc" class="st3" d="
	M109.5,47.3c34.1,0,61.7,27.6,61.7,61.7s-27.6,61.7-61.7,61.7S47.8,143.1,47.8,109h61.7V47.3z"/>
<linearGradient id="${
      ring4.id
    }" gradientUnits="userSpaceOnUse" x1="30.1616" y1="91.1368" x2="65.0124" y2="125.9876" gradientTransform="matrix(1.251 0 0 -1.251 28.1719 266.6061)">
	<stop  offset="0" style="stop-color:#00A000;stop-opacity:0.2589"/>
	<stop  offset="1" style="stop-color:#008000"/>
</linearGradient>
<path id="path6377" sodipodi:cx="126" sodipodi:cy="155" sodipodi:end="4.712389" sodipodi:rx="37" sodipodi:ry="37" sodipodi:start="0" sodipodi:type="arc" class="st4" d="
	M155.8,109c0,25.6-20.7,46.3-46.3,46.3S63.2,134.6,63.2,109s20.7-46.3,46.3-46.3V109H155.8z"/>
<linearGradient id="${
      ring5.id
    }" gradientUnits="userSpaceOnUse" x1="149.5189" y1="733.5189" x2="223.5189" y2="733.5189" gradientTransform="matrix(0 0.834 0.834 0 -502.2368 -45.9352)">
	<stop  offset="0" style="stop-color:#263CCE"/>
	<stop  offset="1" style="stop-color:#263CCE;stop-opacity:0"/>
</linearGradient>
<path id="path3654" sodipodi:cx="126" sodipodi:cy="155" sodipodi:end="4.712389" sodipodi:rx="37" sodipodi:ry="37" sodipodi:start="0" sodipodi:type="arc" class="st5" d="
	M109.5,140.5c-17,0-30.9-13.8-30.9-30.9s13.8-30.9,30.9-30.9s30.9,13.8,30.9,30.9h-30.9V140.5z"/>
<linearGradient id="${
      ring6.id
    }" gradientUnits="userSpaceOnUse" x1="-907.0378" y1="1098.0378" x2="-975.6969" y2="1137.6781" gradientTransform="matrix(-0.417 0 0 0.417 -268.7238 -348.8683)">
	<stop  offset="0" style="stop-color:#652F99"/>
	<stop  offset="1" style="stop-color:#502679;stop-opacity:0.6518"/>
</linearGradient>
<path id="path3660" sodipodi:cx="126" sodipodi:cy="155" sodipodi:rx="37" sodipodi:ry="37" sodipodi:type="arc" class="st6" d="
	M94.1,109c0-8.5,6.9-15.4,15.4-15.4s15.4,6.9,15.4,15.4s-6.9,15.4-15.4,15.4S94.1,117.5,94.1,109z"/>
</svg>
`
  };
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`\`approvedForFreeCulturalWorks\` also took some fiddling to use global unique IRIs.`
)});
  main.variable(observer("approvedForFreeCulturalWorks")).define("approvedForFreeCulturalWorks", ["DOM"], function(DOM)
{
  const AI_GaussianBlur_4 = DOM.uid("AI_GaussianBlur_4");
  const SVGID_1_ = DOM.uid("SVGID_1_");
  const SVGID_2_ = DOM.uid("SVGID_2_");
  const SVGID_3_ = DOM.uid("SVGID_3_");
  const SVGID_4_ = DOM.uid("SVGID_4_");
  // console.log(AI_GaussianBlur_4);
  // console.log(SVGID_1_.toString());
  // console.log(SVGID_2_);
  // console.log(SVGID_3_);
  // console.log(SVGID_4_);
  return {
    width: 144,
    height: 144,

    xml: `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Generator: Adobe Illustrator 13.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 14948)  -->
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" id="Layer_1" x="0px" y="0px" width="144.0072" height="144.01801" viewBox="0 0 144.0072 144.01801" enable-background="new 0 0 640 480" xml:space="preserve" inkscape:version="0.47 r22583" sodipodi:docname="free-cultural-works-final.svg"><metadata id="metadata108"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title/></cc:Work></rdf:RDF></metadata><defs id="defs106"><inkscape:perspective sodipodi:type="inkscape:persp3d" inkscape:vp_x="0 : 240 : 1" inkscape:vp_y="0 : 1000 : 0" inkscape:vp_z="640 : 240 : 1" inkscape:persp3d-origin="320 : 160 : 1" id="perspective110"/></defs><sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="640" inkscape:window-height="495" id="namedview104" showgrid="false" showborder="false" inkscape:showpageshadow="false" inkscape:zoom="2" inkscape:cx="70.4516" inkscape:cy="72.433703" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="0" inkscape:current-layer="Layer_1"/>
<filter id=${AI_GaussianBlur_4.id} color-interpolation-filters="sRGB">
	<feGaussianBlur stdDeviation="4" id="feGaussianBlur4"/>
</filter>
<g id="g6" transform="translate(-249.5484,-172.4835)">
	<path d="m 377.802,249.141 3.753,-2.592 -3.572,-2.853 3.501,-2.943 -0.385,-0.25 0.007,-0.002 -3.456,-2.241 3.194,-3.276 -4.059,-2.115 2.862,-3.564 -4.239,-1.71 2.511,-3.825 -4.383,-1.296 2.124,-4.041 -2.032,-0.394 -2.459,-0.479 1.719,-4.23 -4.545,-0.432 1.306,-4.374 -4.572,0.009 0.873,-4.482 -4.545,0.459 0.44,-4.554 -4.481,0.891 v -4.572 l -4.383,1.323 -0.433,-4.545 -4.229,1.728 -0.883,-4.482 -4.041,2.133 -1.305,-4.374 -3.815,2.511 -1.729,-4.23 -3.555,2.871 -2.124,-4.041 -3.258,3.195 -2.512,-3.816 -2.934,3.501 -2.862,-3.564 -2.583,3.771 -3.195,-3.276 -2.214,4.005 -3.492,-2.952 -1.817,4.203 -3.753,-2.601 -1.404,4.356 -3.996,-2.223 -0.972,4.464 -4.194,-1.818 -0.531,4.536 -4.347,-1.413 -0.099,4.572 -4.464,-0.99 0.342,4.563 -4.536,-0.549 0.783,4.5 -4.572,-0.108 1.215,4.401 -4.554,0.342 1.629,4.266 -4.5,0.765 2.034,4.095 -4.41,1.206 2.421,3.87 -4.275,1.62 2.79,3.627 -4.095,2.025 3.114,3.339 -3.879,2.412 3.429,3.023 -3.627,2.772 2.651,1.916 -0.005,0.001 1.053,0.756 -3.339,3.114 3.942,2.312 -3.024,3.42 4.149,1.908 -2.691,3.699 4.32,1.512 -2.313,3.934 4.437,1.08 -0.603,1.296 0.001,-10e-4 -1.325,2.854 4.527,0.648 -1.521,4.311 4.563,0.207 -1.089,4.438 4.563,-0.234 -0.657,4.527 4.518,-0.676 -0.216,4.563 4.437,-1.107 0.216,4.563 4.311,-1.521 0.666,4.519 4.131,-1.936 1.098,4.438 3.933,-2.331 1.521,4.311 3.681,-2.699 1.935,4.148 3.411,-3.042 2.313,3.942 3.105,-3.357 2.691,3.699 2.763,-3.645 3.033,3.42 2.394,-3.889 3.348,3.114 2.017,-4.104 3.627,2.771 1.611,-4.275 3.888,2.412 1.188,-4.419 4.096,2.034 0.756,-4.518 4.274,1.629 0.315,-4.563 4.41,1.197 -0.117,-4.563 4.5,0.766 -0.558,-4.536 4.554,0.324 -0.999,-4.455 4.562,-0.108 -1.422,-4.347 4.536,-0.549 -1.836,-4.194 4.464,-0.99 -2.231,-3.978 4.347,-1.413 -2.61,-3.762 4.194,-1.827 -2.961,-3.483 3.996,-2.223 -3.276,-3.185 z m -85.266,-9.531 c 1.854,-11.025 9.927,-20.511 21.438,-23.598 2.551,-0.685 5.115,-1.012 7.636,-1.012 8.846,0 17.181,4.022 22.721,10.732 l -51.795,13.878 z m 36.693,33.328 c -2.552,0.684 -5.117,1.011 -7.64,1.011 -9.093,0 -17.646,-4.243 -23.184,-11.288 l 26.185,-7.017 26.186,-7.016 c -1.621,11.331 -9.802,21.159 -21.547,24.31 z" id="path8" style="fill:#a8a8a8;filter:${AI_GaussianBlur_4}"/>
	
		<linearGradient id=${
      SVGID_1_.id
    } gradientUnits="userSpaceOnUse" x1="0.0009765625" y1="480" x2="1.001" y2="480" gradientTransform="matrix(119.1088,14.6247,14.6247,-119.1088,-6757.8369,57409.395)">
		<stop offset="0" style="stop-color:#74B106" id="stop11"/>
		<stop offset="1" style="stop-color:#4C6003" id="stop13"/>
	</linearGradient>
	<path d="m 350.775,248.628 c -1.62,11.331 -9.802,21.159 -21.547,24.31 -2.552,0.684 -5.117,1.011 -7.64,1.011 -9.093,0 -17.646,-4.243 -23.184,-11.288 l -3.151,0.845 -25.126,6.731 -1.325,2.854 4.527,0.648 -1.521,4.311 4.563,0.207 -1.089,4.438 4.563,-0.234 -0.657,4.527 4.518,-0.676 -0.216,4.563 4.437,-1.107 0.216,4.563 4.311,-1.521 0.666,4.519 4.131,-1.936 1.098,4.438 3.933,-2.331 1.521,4.311 3.681,-2.699 1.935,4.148 3.411,-3.042 2.313,3.942 3.105,-3.357 2.691,3.699 2.763,-3.645 3.033,3.42 2.394,-3.889 3.348,3.114 2.017,-4.104 3.627,2.771 1.611,-4.275 3.888,2.412 1.188,-4.419 4.096,2.034 0.756,-4.518 4.274,1.629 0.315,-4.563 4.41,1.197 -0.117,-4.563 4.5,0.766 -0.558,-4.536 4.554,0.324 -0.999,-4.455 4.562,-0.108 -1.422,-4.347 4.536,-0.549 -1.836,-4.194 4.464,-0.99 -2.231,-3.978 4.347,-1.413 -2.61,-3.762 4.194,-1.827 -2.961,-3.483 3.996,-2.223 -3.276,-3.187 3.753,-2.592 -3.572,-2.853 3.501,-2.943 -0.385,-0.25 m 0,0 -27.174,7.279 m -34.623,-63.297 -2.583,3.771 -3.195,-3.276 -2.214,4.005 -3.492,-2.952 -1.818,4.203 -3.753,-2.601 -1.404,4.356 -3.996,-2.223 -0.972,4.464 -4.194,-1.818 -0.531,4.536 -4.347,-1.413 -0.099,4.572 -4.464,-0.99 0.342,4.563 -4.536,-0.549 0.783,4.5 -4.572,-0.108 1.215,4.401 -4.554,0.342 1.629,4.266 -4.5,0.765 2.034,4.095 -4.41,1.206 2.421,3.87 -4.275,1.62 2.79,3.627 -4.095,2.025 3.114,3.339 -3.879,2.412 3.429,3.023 -3.627,2.772 2.651,1.916 25.141,-6.74 3.195,-0.856 c 1.854,-11.024 9.927,-20.51 21.438,-23.597 2.551,-0.685 5.115,-1.012 7.636,-1.012 8.846,0 17.181,4.022 22.721,10.732 l 3.195,-0.855 25.767,-6.903 0.335,0.065 -2.459,-0.479 1.719,-4.23 -4.545,-0.432 1.306,-4.374 -4.572,0.009 0.873,-4.482 -4.545,0.459 0.44,-4.554 -4.481,0.891 v -4.572 l -4.383,1.323 -0.433,-4.545 -4.229,1.728 -0.883,-4.482 -4.041,2.133 -1.305,-4.374 -3.815,2.511 -1.729,-4.23 -3.555,2.871 -2.124,-4.041 -3.258,3.195 -2.512,-3.816 -2.934,3.501 -2.861,-3.563" id="path15" style="fill:${SVGID_1_}"/>
	<g display="none" id="g17" style="display:none">
		<defs id="defs19">
			<path id=${
        SVGID_2_.id
      } d="m 270.729,268.941 -0.603,1.296 0.001,-0.001 0.602,-1.295 m 53.861,-13.297 -26.186,7.016 c 0,0 10e-4,10e-4 10e-4,10e-4 l 26.185,-7.017 m -60.39,-8.439 -0.005,10e-4 1.053,0.756 -1.048,-0.757 m 113.449,-8.945 0,0 3.449,2.243 0.007,-0.002 -3.456,-2.241 m -59.215,-5.589 -25.897,6.938 c 0,0.001 0,0.001 0,0.001 l 25.897,-6.939 m 55.194,-14.632 2.023,0.394 -2.115,4.041 2.124,-4.041 -2.032,-0.394"/>
		</defs>
		<clipPath id=${SVGID_3_.id} display="inline">
			<use xlink:href="${SVGID_2_}" overflow="visible" id="use23" style="overflow:visible" x="0" y="0" width="640" height="480"/>
		</clipPath>
		<g display="inline" clip-path="${SVGID_3_}" id="g25" style="display:inline">
			
				<image overflow="visible" width="246" height="111" xlink:href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJ5AAAEAgAABZ//2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIAHEA+AMBIgACEQEDEQH/ xACKAAEAAwEBAQAAAAAAAAAAAAAAAQIDBAUHAQEAAAAAAAAAAAAAAAAAAAAAEAACAgEDBAMAAwAA AAAAAAAAAQIFAxETFSAlNQYwQAQQcBIRAAAEBQQCAQMFAAAAAAAAAAABAgOR0ZMENECxM3MystJQ EUEhUWFSExIBAAAAAAAAAAAAAAAAAAAAcP/aAAwDAQACEQMRAAAAw8zp8o6HKOpyjqco6nLY6dOf Q3tgN2A3jEaZxQlhQ6nKOpyjqco7NvO1PXcwt5Xp+WAAAW1rsTKCUQWilTWMam1M4LUAAABpnY9F UW8z0vNAAExJvfAbVyqa1pBaIAAAAAACYk70C/m+l5oAAAAAAAAAAAAAmJO4F/N9PzAAAAAAAkQt Yo1sZTsMKa5AACYk7ki/mer5ZAAABJE3uZTtJlbUUtYRIRS2JWkwAAJi52rDXyvZ8swaQUXFFxS0 yaXy1LJkqsKrQRWcyuV4KLii4ouK6NjpXH1EAAAAAAAAAAAAAAAH/9oACAECAAEFAP6A/9oACAED AAEFAP6A/9oACAEBAAEFALv9/wC7HaztLEdpZHKWRylkcpZHKWRylkcpZHJ2QrKyI2FkKwsTkLA5 CwOQsDkLAdhYjsLElY2SHZ2ZylkcpZHKWRylkcpZHKWRylkRtLIhZ2LK+w/fL91++8SfwJakYCia dTRKKJL4EQZW+Q9gfeH1xRCIl06mo5IcxzJPX4YMrH3D2DzL6kQiRX8amo5Icx5B5BzHJmvxRKvy HsD711RIGo5DmPIOY5Gpr8sSqfcPYPNdSYpjmOY5Gv0UVT7h7B5r7iKryPsHmvuIqvI+wea+jof5 FBn+Bx060VXkPYPNfLoaCixQFjFAUBpEx9SKryHsC7y/i0FEUGKAoCgKJoafxJkn1xKryHsHmX8C QoCgKAomhp0yZKQ31wRVruF+u8SXwRZFoXXqOROY31ogisXcL3DllbywZh4Mxs5jZzGzmNnMbOY2 cxs5iOLMRx5RY8ptZTaym1lNrKPFlHjykseYeHMbOY2cxs5jZzGzmNnMbGYjgzEMGYrsWVfv+/8A /9oACAECAgY/AAD/2gAIAQMCBj8AAP/aAAgBAQEGPwC7Qi5dSlLqySklqIiL7/giMZb1Rcxlv1Fz GW/VXMZb9Vcxlv1VzGW/VXMZb9Vcxlv1VzGW/VXMZb9Vcxlv1F/IZb1RcxlPVFzGU9UXMZT1RUxl PVFzGU9UXMZb1RfyGW/UX8hlv1VzGW/VXMZb9Vcxlv1VzGW/VXMZb9Vcxlv1VzGW/VXMZb9RcxlP VFTFslVy6aTdbIyNxRkZGov5F73L311r3N+xC97l76617m/Yhe9y99da9zfsQvu5e+ute5v2IX3c vfXWvc37EL7uXvrrTub9iF93r311r3N+xC+7l76617m/Yhfdy99da9zfsQve5e+ute5v2IXvcvfX Wvc37EL3uXvrrXub9iF4ZIUZG8v9SI/3HGqBjjVAxxqgY41QMcaoGONUDHGqBjjVAxxqgY41QMeC oGPBUDHgqBjwVAx4KgY8FQMeCoGPBUDHgqBjjVAxxqgY41QMcaoGONUDHGqBjjVAxxqgY41QMcao GLUzQr7f7N/g/wCxfQP/2Q==" transform="matrix(0.4801,0,0,0.4801,263.6426,217.3721)" id="image27" style="overflow:visible">
			</image>
		</g>
	</g>
	
		<circle cx="321.59799" cy="244.474" r="33.594002" id="circle29" sodipodi:cx="321.59799" sodipodi:cy="244.474" sodipodi:rx="33.594002" sodipodi:ry="33.594002" style="opacity:0.5;fill:none;stroke:#ffffff;stroke-width:0.5;stroke-dasharray:2" d="m 355.19199,244.474 c 0,18.55345 -15.04054,33.594 -33.594,33.594 -18.55345,0 -33.594,-15.04055 -33.594,-33.594 0,-18.55346 15.04055,-33.594 33.594,-33.594 18.55346,0 33.594,15.04054 33.594,33.594 z"/>
	
		<circle cx="321.599" cy="244.474" r="51.987999" id="circle31" sodipodi:cx="321.599" sodipodi:cy="244.474" sodipodi:rx="51.987999" sodipodi:ry="51.987999" style="opacity:0.5;fill:none;stroke:#ffffff;stroke-width:0.5;stroke-dasharray:2" d="m 373.587,244.474 c 0,28.71218 -23.27582,51.988 -51.988,51.988 -28.71218,0 -51.988,-23.27582 -51.988,-51.988 0,-28.71218 23.27582,-51.988 51.988,-51.988 28.71218,0 51.988,23.27582 51.988,51.988 z"/>
	
		<linearGradient id=${
      SVGID_4_.id
    } gradientUnits="userSpaceOnUse" x1="0" y1="480.00391" x2="1" y2="480.00391" gradientTransform="matrix(119.1088,14.6247,14.6247,-119.1088,-6757.8369,57409.395)">
		<stop offset="0" style="stop-color:#4A4A06" id="stop34"/>
		<stop offset="1" style="stop-color:#4A4A03" id="stop36"/>
	</linearGradient>
	<polyline points="373.293,217.974 347.526,224.877 318.434,232.671 292.536,239.61 292.536,239.61    289.341,240.465 264.2,247.205 265.248,247.962 261.909,251.076 265.851,253.389 262.827,256.809 266.976,258.717 264.285,262.416    268.605,263.928 266.292,267.861 270.729,268.941 270.127,270.236 295.254,263.505 298.405,262.66 298.404,262.659 324.59,255.644    353.925,247.782 381.099,240.503 377.649,238.26 380.844,234.984 376.785,232.869 379.647,229.305 375.408,227.595 377.919,223.77    373.536,222.474 375.651,218.433 373.628,218.039 373.293,217.974  " id="polyline38" style="fill:${SVGID_4_}"/>
	<g id="g40">
		<path d="m 280.432,260.971 -2.611,0.7 -0.75,-2.169 -2.457,0.659 -0.501,2.503 -2.28,0.611 2.459,-11.854 2.523,-0.676 3.617,10.226 z m -3.881,-2.991 -0.938,-2.732 -0.617,3.148 1.555,-0.416 z" id="path42" style="fill:#ffffff"/>
		<path d="m 288.477,251.166 c 0.127,2.416 -1.016,3.948 -3.424,4.594 l -1.008,0.27 0.202,3.92 -2.51,0.672 -0.57,-11.041 3.569,-0.957 c 1.995,-0.534 3.192,-0.059 3.59,1.426 0.084,0.313 0.134,0.686 0.151,1.116 z m -2.507,0.672 c -0.022,-0.455 -0.065,-0.803 -0.131,-1.047 -0.146,-0.545 -0.495,-0.744 -1.047,-0.596 l -1.035,0.277 0.208,3.992 0.9,-0.241 c 0.808,-0.215 1.177,-1.012 1.105,-2.385 z" id="path44" style="fill:#ffffff"/>
		<path d="m 297.318,248.797 c 0.127,2.416 -1.015,3.947 -3.424,4.594 l -1.008,0.27 0.202,3.92 -2.509,0.672 -0.57,-11.041 3.568,-0.957 c 1.996,-0.535 3.193,-0.059 3.592,1.426 0.084,0.313 0.134,0.686 0.149,1.116 z m -2.506,0.672 c -0.022,-0.455 -0.065,-0.803 -0.131,-1.047 -0.146,-0.545 -0.495,-0.744 -1.048,-0.596 l -1.034,0.277 0.207,3.992 0.9,-0.241 c 0.81,-0.215 1.179,-1.012 1.106,-2.385 z" id="path46" style="fill:#ffffff"/>
		<path d="m 306.275,246.156 c 0.063,1.213 -0.322,2.236 -1.154,3.07 l 2.204,4.539 -2.681,0.718 -1.645,-3.98 -0.175,0.046 -1.131,0.305 0.234,4.357 -2.506,0.672 -0.571,-11.041 3.69,-0.989 c 2.02,-0.542 3.216,-0.114 3.589,1.278 0.08,0.289 0.128,0.631 0.146,1.025 z m -2.507,0.672 c -0.026,-0.38 -0.066,-0.668 -0.119,-0.865 -0.137,-0.51 -0.489,-0.689 -1.058,-0.537 l -1.166,0.312 0.186,3.551 1.027,-0.275 c 0.812,-0.218 1.189,-0.948 1.13,-2.186 z" id="path48" style="fill:#ffffff"/>
		<path d="m 316.882,245.607 c 0.079,1.596 -0.132,2.945 -0.632,4.05 -0.657,1.444 -1.787,2.382 -3.389,2.812 -2.262,0.605 -3.703,-0.245 -4.322,-2.556 -0.158,-0.591 -0.256,-1.255 -0.291,-1.992 -0.092,-1.593 0.119,-2.942 0.631,-4.05 0.657,-1.445 1.787,-2.381 3.389,-2.811 2.263,-0.606 3.703,0.245 4.321,2.555 0.159,0.592 0.257,1.256 0.293,1.992 z m -2.565,0.668 c -0.05,-1.018 -0.147,-1.807 -0.298,-2.363 -0.289,-1.08 -0.846,-1.51 -1.669,-1.289 -0.685,0.184 -1.134,0.691 -1.348,1.518 -0.177,0.684 -0.229,1.717 -0.157,3.104 0.051,1.068 0.146,1.869 0.29,2.403 0.282,1.056 0.83,1.476 1.644,1.257 0.672,-0.18 1.127,-0.688 1.363,-1.521 0.187,-0.698 0.247,-1.734 0.175,-3.109 z" id="path50" style="fill:#ffffff"/>
		<path d="m 325.997,237.568 -2.458,11.852 -2.523,0.677 -3.617,-10.225 2.611,-0.699 2.318,6.916 0.084,-0.016 1.52,-7.951 2.065,-0.554 z" id="path52" style="fill:#ffffff"/>
		<path d="m 334.131,235.388 0.064,1.569 -4.351,1.166 0.171,2.959 3.018,-0.809 0.082,1.563 -3.02,0.809 0.176,3.387 4.346,-1.164 0.083,1.562 -6.857,1.838 -0.571,-11.042 6.859,-1.838 z" id="path54" style="fill:#ffffff"/>
		<path d="m 343.969,238.294 c 0.089,1.68 -0.104,3.025 -0.579,4.035 -0.646,1.354 -1.844,2.267 -3.595,2.735 l -3.517,0.943 -0.571,-11.042 3.272,-0.876 c 0.87,-0.233 1.592,-0.326 2.163,-0.28 1.285,0.104 2.13,0.915 2.537,2.435 0.15,0.557 0.247,1.24 0.29,2.05 z m -2.511,0.728 c -0.04,-0.797 -0.128,-1.458 -0.269,-1.98 -0.326,-1.218 -0.932,-1.709 -1.813,-1.473 l -1.096,0.294 0.427,7.909 1.095,-0.293 c 0.672,-0.181 1.134,-0.604 1.384,-1.268 0.25,-0.664 0.341,-1.727 0.272,-3.189 z" id="path56" style="fill:#ffffff"/>
		<path d="m 355.179,231.823 0.055,1.276 -3.532,0.947 0.11,2.418 2.614,-0.701 0.068,1.274 -2.602,0.697 0.208,4.033 -2.045,0.548 -0.464,-8.996 5.588,-1.496 z" id="path58" style="fill:#ffffff"/>
		<path d="m 363.072,234.268 c 0.064,1.3 -0.107,2.399 -0.514,3.299 -0.536,1.177 -1.457,1.94 -2.762,2.29 -1.844,0.494 -3.018,-0.199 -3.521,-2.081 -0.129,-0.483 -0.207,-1.024 -0.236,-1.624 -0.074,-1.298 0.096,-2.398 0.514,-3.3 0.535,-1.178 1.456,-1.94 2.761,-2.29 1.843,-0.494 3.017,0.199 3.521,2.081 0.129,0.483 0.208,1.024 0.237,1.625 z m -2.088,0.544 c -0.041,-0.83 -0.122,-1.473 -0.243,-1.927 -0.235,-0.879 -0.688,-1.229 -1.36,-1.048 -0.557,0.149 -0.923,0.561 -1.098,1.236 -0.145,0.556 -0.188,1.398 -0.128,2.528 0.04,0.871 0.119,1.523 0.235,1.958 0.23,0.86 0.677,1.202 1.339,1.024 0.548,-0.147 0.919,-0.56 1.112,-1.241 0.152,-0.567 0.2,-1.41 0.143,-2.53 z" id="path60" style="fill:#ffffff"/>
		<path d="m 370.629,230.373 c 0.052,0.99 -0.262,1.824 -0.941,2.503 l 1.797,3.698 -2.184,0.585 -1.34,-3.243 -0.143,0.038 -0.922,0.247 0.191,3.551 -2.042,0.548 -0.465,-8.996 3.007,-0.806 c 1.645,-0.44 2.619,-0.094 2.923,1.042 0.064,0.234 0.104,0.513 0.119,0.833 z m -2.042,0.547 c -0.022,-0.308 -0.055,-0.542 -0.098,-0.703 -0.111,-0.416 -0.399,-0.562 -0.862,-0.438 l -0.95,0.254 0.152,2.894 0.837,-0.224 c 0.661,-0.178 0.968,-0.772 0.921,-1.783 z" id="path62" style="fill:#ffffff"/>
	</g>
	<g id="g64">
		<g id="g66">
			<path d="m 277.64,227.445 -1.257,4.185 2.98,0.896 0.924,-3.078 1.14,0.342 -0.925,3.077 4.51,1.354 -0.557,1.856 -9.769,-2.933 1.813,-6.041 1.141,0.342 z" id="path68" style="fill:#d4ff17"/>
			<path d="m 283.574,222.414 c 0.59,0.288 0.751,0.708 0.482,1.258 -0.225,0.458 -0.558,0.617 -1,0.476 -0.442,-0.141 -0.723,-0.089 -0.842,0.156 -0.189,0.387 0.063,0.927 0.759,1.62 l 4.367,2.137 -0.784,1.604 -5.513,-2.697 -0.307,0.626 -0.886,-0.434 1.039,-2.122 0.641,0.313 c -0.35,-0.625 -0.375,-1.243 -0.076,-1.854 0.288,-0.591 0.655,-0.967 1.1,-1.128 0.354,-0.13 0.694,-0.115 1.02,0.045 z" id="path70" style="fill:#d4ff17"/>
			<path d="m 289.426,217.264 c 0.312,0.227 0.565,0.445 0.762,0.657 l -2.543,3.511 c 1.188,0.832 2.076,0.841 2.669,0.024 0.485,-0.671 0.537,-1.34 0.154,-2.01 l 1.001,-0.366 c 0.252,0.463 0.356,0.917 0.314,1.362 -0.044,0.542 -0.258,1.08 -0.644,1.613 -0.686,0.944 -1.5,1.432 -2.445,1.461 -0.815,0.024 -1.659,-0.279 -2.531,-0.911 -2.028,-1.47 -2.427,-3.053 -1.196,-4.751 1.211,-1.671 2.697,-1.868 4.459,-0.59 z m -1.027,1.503 -0.275,-0.199 c -0.514,-0.373 -0.922,-0.592 -1.225,-0.657 -0.462,-0.097 -0.847,0.066 -1.151,0.488 -0.525,0.725 -0.183,1.526 1.029,2.404 l 0.096,0.069 1.526,-2.105 z" id="path72" style="fill:#d4ff17"/>
			<path d="m 295.197,211.63 c 0.264,0.282 0.471,0.546 0.623,0.792 l -3.169,2.958 c 1.007,1.045 1.879,1.223 2.616,0.535 0.604,-0.565 0.783,-1.212 0.535,-1.943 l 1.053,-0.168 c 0.159,0.502 0.175,0.968 0.048,1.397 -0.146,0.523 -0.459,1.01 -0.939,1.458 -0.853,0.797 -1.747,1.119 -2.679,0.967 -0.807,-0.131 -1.576,-0.59 -2.311,-1.377 -1.71,-1.83 -1.8,-3.462 -0.267,-4.893 1.508,-1.407 3.005,-1.316 4.49,0.274 z m -1.295,1.279 -0.231,-0.248 c -0.434,-0.464 -0.793,-0.757 -1.077,-0.879 -0.435,-0.183 -0.842,-0.096 -1.224,0.259 -0.654,0.611 -0.471,1.462 0.551,2.556 l 0.081,0.088 1.9,-1.776 z" id="path74" style="fill:#d4ff17"/>
			<path d="m 307.717,205.881 c 0.277,0.797 0.277,1.568 0.003,2.312 -0.312,0.824 -0.97,1.475 -1.974,1.949 -1.352,0.64 -2.587,0.572 -3.706,-0.202 -0.87,-0.592 -1.624,-1.563 -2.265,-2.916 -0.61,-1.291 -0.865,-2.45 -0.761,-3.477 0.14,-1.319 0.866,-2.29 2.177,-2.91 1.096,-0.519 2.074,-0.611 2.934,-0.279 0.674,0.258 1.154,0.689 1.44,1.293 0.373,0.789 0.221,1.344 -0.454,1.664 -0.298,0.141 -0.577,0.167 -0.839,0.076 -0.262,-0.089 -0.461,-0.276 -0.597,-0.564 -0.048,-0.102 -0.098,-0.232 -0.147,-0.391 -0.05,-0.158 -0.093,-0.278 -0.133,-0.36 -0.159,-0.338 -0.417,-0.523 -0.771,-0.556 -0.269,-0.037 -0.556,0.018 -0.863,0.163 -0.727,0.345 -1.062,0.948 -1.004,1.812 0.046,0.654 0.341,1.556 0.885,2.703 1.177,2.489 2.427,3.421 3.748,2.796 1.056,-0.5 1.434,-1.449 1.134,-2.85 l 1.193,-0.263 z" id="path76" style="fill:#d4ff17"/>
			<path d="m 316.37,206.675 -0.646,0.152 c -0.803,0.191 -1.367,0.062 -1.693,-0.385 -0.308,0.714 -0.83,1.157 -1.565,1.332 -1.649,0.391 -2.681,-0.28 -3.09,-2.011 l -1.065,-4.5 1.736,-0.412 1.098,4.632 c 0.122,0.519 0.258,0.872 0.407,1.058 0.187,0.247 0.456,0.328 0.81,0.245 0.33,-0.079 0.614,-0.318 0.852,-0.718 0.238,-0.4 0.306,-0.814 0.203,-1.245 l -1.07,-4.516 1.737,-0.412 1.254,5.294 c 0.107,0.452 0.326,0.639 0.657,0.561 l 0.148,-0.035 0.227,0.96 z" id="path78" style="fill:#d4ff17"/>
			<path d="m 322.016,206.421 -4.194,0.192 -0.045,-0.985 1.206,-0.055 -0.375,-8.22 -0.696,0.032 -0.045,-0.985 2.479,-0.113 0.42,9.206 1.205,-0.056 0.045,0.984 z" id="path80" style="fill:#d4ff17"/>
			<path d="m 327.564,200.695 -1.373,-0.119 -0.379,4.404 c -0.043,0.485 0.105,0.743 0.445,0.771 l 0.523,0.045 -0.084,0.982 -1.033,-0.089 c -1.186,-0.103 -1.723,-0.809 -1.609,-2.118 l 0.359,-4.15 -1.371,-0.118 0.084,-0.982 1.373,0.119 0.16,-1.864 1.865,-0.846 -0.248,2.863 1.373,0.118 -0.085,0.984 z" id="path82" style="fill:#d4ff17"/>
			<path d="m 334.396,208.531 -0.643,-0.163 c -0.799,-0.204 -1.24,-0.579 -1.322,-1.126 -0.604,0.49 -1.271,0.642 -2.004,0.455 -1.645,-0.418 -2.246,-1.489 -1.807,-3.213 l 1.139,-4.481 1.73,0.439 -1.174,4.613 c -0.131,0.516 -0.174,0.892 -0.127,1.125 0.051,0.306 0.252,0.503 0.604,0.593 0.328,0.084 0.691,0.003 1.086,-0.241 0.396,-0.245 0.648,-0.581 0.758,-1.009 l 1.145,-4.498 1.729,0.44 -1.34,5.272 c -0.115,0.45 -0.008,0.717 0.322,0.802 l 0.148,0.037 -0.244,0.955 z" id="path84" style="fill:#d4ff17"/>
			<path d="m 342.99,206.066 c -0.279,0.597 -0.695,0.764 -1.25,0.505 -0.461,-0.216 -0.627,-0.545 -0.494,-0.991 0.133,-0.445 0.076,-0.725 -0.17,-0.84 -0.391,-0.183 -0.926,0.081 -1.607,0.789 l -2.059,4.404 -1.617,-0.755 2.6,-5.561 -0.631,-0.295 0.416,-0.893 2.141,1 -0.303,0.646 c 0.619,-0.36 1.238,-0.397 1.854,-0.109 0.596,0.278 0.979,0.638 1.146,1.08 0.136,0.352 0.127,0.693 -0.026,1.02 z" id="path86" style="fill:#d4ff17"/>
			<path d="m 346.07,215.211 -0.504,-0.35 c -0.502,-0.348 -0.797,-0.739 -0.883,-1.171 -0.641,0.067 -1.268,-0.112 -1.881,-0.539 -0.635,-0.438 -1.043,-0.923 -1.229,-1.451 -0.213,-0.588 -0.115,-1.176 0.291,-1.762 0.826,-1.193 2.059,-1.221 3.699,-0.084 l 0.838,0.581 0.445,-0.642 c 0.258,-0.373 0.408,-0.704 0.449,-0.992 0.041,-0.289 -0.109,-0.552 -0.455,-0.791 -0.475,-0.329 -0.838,-0.312 -1.09,0.05 -0.025,0.038 -0.059,0.084 -0.096,0.141 -0.039,0.055 -0.068,0.097 -0.088,0.125 -0.291,0.419 -0.676,0.462 -1.154,0.13 -0.453,-0.313 -0.531,-0.684 -0.234,-1.113 0.246,-0.354 0.588,-0.586 1.023,-0.697 0.646,-0.158 1.381,0.046 2.199,0.615 1.52,1.052 1.768,2.315 0.748,3.787 l -1.666,2.402 c -0.264,0.383 -0.258,0.67 0.021,0.863 l 0.127,0.088 -0.56,0.81 z m -1.15,-2.639 0.959,-1.383 -0.805,-0.558 c -0.646,-0.448 -1.186,-0.361 -1.619,0.263 -0.432,0.625 -0.357,1.138 0.225,1.542 0.408,0.283 0.82,0.328 1.24,0.136 z" id="path88" style="fill:#d4ff17"/>
			<path d="m 349.686,218.785 -3.006,-2.932 0.688,-0.705 0.863,0.842 5.746,-5.89 -0.5,-0.487 0.689,-0.706 1.775,1.733 -6.432,6.597 0.863,0.843 -0.686,0.705 z" id="path90" style="fill:#d4ff17"/>
		</g>
		<g id="g92">
			<path d="m 323.52,282.838 -2.383,10.027 -2.273,-0.205 -1.074,-5.855 -2.077,5.574 -2.076,-0.186 -0.63,-10.297 1.918,0.172 0.396,7.596 0.027,0.002 2.396,-6.543 1.27,0.113 1.194,6.85 0.034,0.002 1.721,-7.389 1.557,0.139 z" id="path94" style="fill:#d4ff17"/>
			<path d="m 331.182,288.404 c 0.174,1.211 -0.049,2.184 -0.666,2.912 -0.512,0.598 -1.215,0.963 -2.111,1.09 -0.898,0.127 -1.676,-0.025 -2.332,-0.457 -0.797,-0.527 -1.281,-1.398 -1.453,-2.609 l -0.047,-0.32 c -0.172,-1.211 0.051,-2.184 0.668,-2.91 0.51,-0.6 1.215,-0.963 2.111,-1.092 0.898,-0.127 1.674,0.025 2.332,0.457 0.797,0.529 1.281,1.398 1.453,2.609 l 0.045,0.32 z m -1.801,0.256 -0.045,-0.318 c -0.24,-1.684 -0.854,-2.455 -1.84,-2.314 -0.988,0.141 -1.361,1.053 -1.123,2.736 l 0.047,0.32 c 0.238,1.682 0.852,2.453 1.84,2.312 0.988,-0.141 1.361,-1.052 1.121,-2.736 z" id="path96" style="fill:#d4ff17"/>
			<path d="m 337.895,283.746 c 0.201,0.627 0.01,1.033 -0.574,1.221 -0.484,0.154 -0.83,0.025 -1.035,-0.393 -0.205,-0.416 -0.438,-0.582 -0.695,-0.5 -0.41,0.131 -0.625,0.688 -0.645,1.67 l 1.482,4.631 -1.699,0.545 -1.871,-5.846 -0.664,0.213 -0.301,-0.939 2.25,-0.721 0.219,0.68 c 0.209,-0.686 0.637,-1.131 1.283,-1.34 0.627,-0.199 1.152,-0.195 1.576,0.014 0.34,0.165 0.564,0.421 0.674,0.765 z" id="path98" style="fill:#d4ff17"/>
			<path d="m 347.541,285.316 -1.801,0.961 -3.172,-2.322 -0.18,0.703 1.42,2.654 -1.574,0.842 -4.346,-8.125 -0.613,0.328 -0.465,-0.871 2.189,-1.17 2.545,4.764 0.736,-3.029 1.48,-0.793 -0.75,3.027 4.531,3.031 z" id="path100" style="fill:#d4ff17"/>
			<path d="m 351.953,279.484 c 0.447,0.584 0.562,1.201 0.348,1.852 -0.197,0.564 -0.627,1.102 -1.293,1.611 -0.686,0.523 -1.338,0.781 -1.959,0.771 -0.572,-0.004 -1.068,-0.232 -1.484,-0.684 l 0.791,-0.842 c 0.527,0.58 1.201,0.557 2.021,-0.068 0.693,-0.531 0.836,-1.062 0.43,-1.592 -0.357,-0.469 -1.045,-0.436 -2.062,0.1 -1.338,0.695 -2.389,0.545 -3.152,-0.455 -0.18,-0.234 -0.299,-0.492 -0.357,-0.775 -0.164,-0.83 0.229,-1.611 1.184,-2.34 0.99,-0.758 1.832,-1.018 2.529,-0.781 0.232,0.082 0.42,0.215 0.564,0.404 0.387,0.504 0.344,0.934 -0.123,1.293 -0.459,0.352 -0.865,0.297 -1.215,-0.162 l -0.094,-0.121 c -0.213,-0.279 -0.568,-0.229 -1.062,0.15 -0.559,0.426 -0.652,0.883 -0.279,1.369 0.289,0.379 0.846,0.352 1.672,-0.082 1.561,-0.81 2.742,-0.693 3.541,0.352 z" id="path102" style="fill:#d4ff17"/>
		</g>
	</g>
</g>
</svg>`
  };
}
);
  main.variable(observer("ccbysastrip")).define("ccbysastrip", function(){return(
{
  width: 90,
  height: 18,
  xml: `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 90 18" enable-background="new 0 0 90 18" xml:space="preserve">
<g id="svg2279" inkscape:output_extension="org.inkscape.output.svg.inkscape" inkscape:version="0.45+devel" sodipodi:docname="by-sa.svg" sodipodi:version="0.32" xmlns:cc="http://web.resource.org/cc/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg">
	
		<sodipodi:namedview  bordercolor="#999999" borderopacity="1" gridtolerance="10000" guidetolerance="10" height="15px" id="base" inkscape:current-layer="layer1" inkscape:cx="40" inkscape:cy="7.5" inkscape:document-units="px" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:showpageshadow="false" inkscape:window-height="624" inkscape:window-width="935" inkscape:window-x="50" inkscape:window-y="160" inkscape:zoom="10.5125" objecttolerance="10" pagecolor="#ffffff" showborder="true" width="80px">
		</sodipodi:namedview>
	<g id="layer1" inkscape:groupmode="layer" inkscape:label="Layer 1">
		<g>
			<g id="BY-SA_7_" transform="matrix(0.9875019,0,0,0.9333518,-323.90064,-356.81188)">
				<g id="g3747_7_" transform="translate(158,145)">
					<rect id="rect3751_7_" x="172" y="239.4" fill="#FFFFFF" width="87.1" height="15"/>
					<path id="path3753_7_" sodipodi:nodetypes="cccscc" fill="#FFFFFF" d="M172,239.4v15h21c1.4-2.2,2.3-4.7,2.3-7.5
						c0-2.8-0.9-5.3-2.2-7.5H172z"/>
					<g>
						<g id="g3755_7_" transform="matrix(0.9612533,0,0,0.9612533,6.8341566,9.5069994)">
							<path id="path3757_7_" fill="#FFFFFF" d="M192.1,247c0,4.7-3.6,8.6-8,8.6c-4.4,0-8.1-3.8-8.1-8.6c0,0,0,0,0,0
								c0-4.7,3.6-8.6,8-8.6C188.4,238.4,192.1,242.3,192.1,247C192.1,247,192.1,247,192.1,247z"/>
							<path id="path3759_7_" fill="#FFFFFF" d="M190.2,240.1c1.8,1.9,2.7,4.2,2.7,6.9c0,2.7-0.9,5-2.6,6.9
								c-1.9,1.9-4.1,2.9-6.6,2.9c-2.5,0-4.7-1-6.5-2.9c-1.8-1.9-2.7-4.2-2.7-6.9c0-2.7,0.9-5,2.7-6.9c1.8-1.9,3.9-2.8,6.5-2.8
								C186.3,237.2,188.5,238.2,190.2,240.1z M178.4,241.3c-1.5,1.6-2.3,3.5-2.3,5.7c0,2.2,0.7,4,2.2,5.6c1.5,1.6,3.3,2.4,5.3,2.4
								s3.9-0.8,5.4-2.4c1.4-1.5,2.2-3.3,2.2-5.6c0-2.2-0.7-4.1-2.2-5.7c-1.5-1.6-3.3-2.3-5.3-2.3
								C181.6,239,179.9,239.8,178.4,241.3z M182.4,246c-0.2-0.5-0.6-0.8-1-0.8c-0.8,0-1.2,0.6-1.2,1.7c0,1.2,0.4,1.7,1.2,1.7
								c0.5,0,0.9-0.3,1.2-0.8l1.1,0.6c-0.5,1-1.3,1.5-2.4,1.5c-0.8,0-1.5-0.3-2-0.8c-0.5-0.5-0.7-1.3-0.7-2.2
								c0-0.9,0.3-1.7,0.8-2.2c0.5-0.5,1.2-0.8,1.9-0.8c1.1,0,2,0.5,2.4,1.4L182.4,246z M187.7,246c-0.2-0.5-0.6-0.8-1-0.8
								c-0.8,0-1.2,0.6-1.2,1.7c0,1.2,0.4,1.7,1.2,1.7c0.5,0,0.9-0.3,1.1-0.8l1.2,0.6c-0.5,1-1.3,1.5-2.4,1.5c-0.8,0-1.5-0.3-2-0.8
								c-0.5-0.5-0.7-1.3-0.7-2.2c0-0.9,0.3-1.7,0.8-2.2c0.5-0.5,1.1-0.8,1.9-0.8c1.1,0,1.9,0.5,2.4,1.4L187.7,246z"/>
						</g>
						<rect x="171.1" y="254.5" fill="#FFFFFF" width="25" height="2"/>
						<rect x="171.2" y="237.4" fill="#FFFFFF" width="25" height="2"/>
						<rect id="rect3749_7_" x="170.5" y="237.8" fill="#FFFFFF" width="90.1" height="18.2"/>
					</g>
				</g>
				<path id="text3761_7_" fill="#FFFFFF" d="M361,391.1c0.3,0,0.5-0.1,0.6-0.2c0.1-0.1,0.2-0.3,0.2-0.6c0-0.3-0.1-0.4-0.2-0.6
					c-0.1-0.1-0.4-0.2-0.6-0.2h-1v1.5H361 M361.1,394.3c0.4,0,0.6-0.1,0.8-0.2c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.1-0.6-0.3-0.7
					c-0.2-0.2-0.4-0.2-0.8-0.2h-1v1.9H361.1 M362.7,391.7c0.4,0.1,0.7,0.3,0.9,0.6c0.2,0.3,0.3,0.7,0.3,1.2c0,0.7-0.2,1.2-0.7,1.6
					c-0.4,0.3-1.1,0.5-2,0.5h-2.9v-7.3h2.6c0.9,0,1.6,0.2,2,0.5c0.4,0.3,0.6,0.8,0.6,1.5c0,0.4-0.1,0.7-0.2,0.9
					C363.2,391.4,363,391.6,362.7,391.7 M363.7,388.3h1.9l1.5,2.6l1.5-2.6h1.9l-2.6,4.2v3.1h-1.8v-3.1L363.7,388.3 M369.7,392h2.9
					v1.4h-2.9V392 M378.7,388.5v1.5c-0.4-0.2-0.7-0.3-1.1-0.4c-0.4-0.1-0.7-0.1-1-0.1c-0.4,0-0.7,0.1-0.9,0.2
					c-0.2,0.1-0.3,0.3-0.3,0.6c0,0.2,0.1,0.3,0.2,0.5c0.1,0.1,0.4,0.2,0.7,0.3l0.7,0.2c0.8,0.2,1.3,0.4,1.6,0.7
					c0.3,0.3,0.5,0.8,0.5,1.4c0,0.8-0.2,1.4-0.7,1.8c-0.4,0.4-1.1,0.6-2,0.6c-0.4,0-0.9,0-1.3-0.1c-0.4-0.1-0.9-0.2-1.3-0.4v-1.6
					c0.4,0.2,0.9,0.4,1.3,0.6c0.4,0.1,0.8,0.2,1.2,0.2c0.4,0,0.7-0.1,0.9-0.2c0.2-0.1,0.3-0.3,0.3-0.6c0-0.2-0.1-0.4-0.2-0.5
					c-0.1-0.1-0.4-0.2-0.8-0.3l-0.7-0.2c-0.7-0.2-1.2-0.4-1.5-0.7c-0.3-0.3-0.5-0.8-0.5-1.4c0-0.7,0.2-1.3,0.7-1.7
					c0.4-0.4,1.1-0.6,1.9-0.6c0.4,0,0.8,0,1.2,0.1C377.8,388.3,378.2,388.4,378.7,388.5 M384.8,394.2H382l-0.4,1.3h-1.8l2.5-7.3h2.1
					l2.5,7.3h-1.8L384.8,394.2 M382.5,392.9h1.9l-0.9-2.9L382.5,392.9"/>
			</g>
		</g>
		<g>
			<g id="BY-SA_6_" transform="matrix(0.9875019,0,0,0.9333518,-323.90064,-356.81188)">
				<g id="g3747_6_" transform="translate(158,145)">
					<rect id="rect3751_6_" x="172" y="239.4" width="87.1" height="15"/>
					<path id="path3753_6_" sodipodi:nodetypes="cccscc" fill="#ABB1AA" d="M172,239.4v15h21c1.4-2.2,2.3-4.7,2.3-7.5
						c0-2.8-0.9-5.3-2.2-7.5H172z"/>
					<g>
						<g id="g3755_6_" transform="matrix(0.9612533,0,0,0.9612533,6.8341566,9.5069994)">
							<path id="path3757_6_" fill="#FFFFFF" d="M192.1,247c0,4.7-3.6,8.6-8,8.6c-4.4,0-8.1-3.8-8.1-8.6c0,0,0,0,0,0
								c0-4.7,3.6-8.6,8-8.6C188.4,238.4,192.1,242.3,192.1,247C192.1,247,192.1,247,192.1,247z"/>
							<path id="path3759_6_" d="M190.2,240.1c1.8,1.9,2.7,4.2,2.7,6.9c0,2.7-0.9,5-2.6,6.9c-1.9,1.9-4.1,2.9-6.6,2.9
								c-2.5,0-4.7-1-6.5-2.9c-1.8-1.9-2.7-4.2-2.7-6.9c0-2.7,0.9-5,2.7-6.9c1.8-1.9,3.9-2.8,6.5-2.8
								C186.3,237.2,188.5,238.2,190.2,240.1z M178.4,241.3c-1.5,1.6-2.3,3.5-2.3,5.7c0,2.2,0.7,4,2.2,5.6c1.5,1.6,3.3,2.4,5.3,2.4
								s3.9-0.8,5.4-2.4c1.4-1.5,2.2-3.3,2.2-5.6c0-2.2-0.7-4.1-2.2-5.7c-1.5-1.6-3.3-2.3-5.3-2.3
								C181.6,239,179.9,239.8,178.4,241.3z M182.4,246c-0.2-0.5-0.6-0.8-1-0.8c-0.8,0-1.2,0.6-1.2,1.7c0,1.2,0.4,1.7,1.2,1.7
								c0.5,0,0.9-0.3,1.2-0.8l1.1,0.6c-0.5,1-1.3,1.5-2.4,1.5c-0.8,0-1.5-0.3-2-0.8c-0.5-0.5-0.7-1.3-0.7-2.2
								c0-0.9,0.3-1.7,0.8-2.2c0.5-0.5,1.2-0.8,1.9-0.8c1.1,0,2,0.5,2.4,1.4L182.4,246z M187.7,246c-0.2-0.5-0.6-0.8-1-0.8
								c-0.8,0-1.2,0.6-1.2,1.7c0,1.2,0.4,1.7,1.2,1.7c0.5,0,0.9-0.3,1.1-0.8l1.2,0.6c-0.5,1-1.3,1.5-2.4,1.5c-0.8,0-1.5-0.3-2-0.8
								c-0.5-0.5-0.7-1.3-0.7-2.2c0-0.9,0.3-1.7,0.8-2.2c0.5-0.5,1.1-0.8,1.9-0.8c1.1,0,1.9,0.5,2.4,1.4L187.7,246z"/>
						</g>
						<rect x="171.1" y="254.5" fill="#FFFFFF" width="25" height="2"/>
						<rect x="171.2" y="237.4" fill="#FFFFFF" width="25" height="2"/>
						<rect id="rect3749_6_" x="170.5" y="237.8" fill="none" stroke="#000000" width="90.1" height="18.2"/>
					</g>
				</g>
				<path id="text3761_6_" fill="#FFFFFF" d="M361,391.1c0.3,0,0.5-0.1,0.6-0.2c0.1-0.1,0.2-0.3,0.2-0.6c0-0.3-0.1-0.4-0.2-0.6
					c-0.1-0.1-0.4-0.2-0.6-0.2h-1v1.5H361 M361.1,394.3c0.4,0,0.6-0.1,0.8-0.2c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.1-0.6-0.3-0.7
					c-0.2-0.2-0.4-0.2-0.8-0.2h-1v1.9H361.1 M362.7,391.7c0.4,0.1,0.7,0.3,0.9,0.6c0.2,0.3,0.3,0.7,0.3,1.2c0,0.7-0.2,1.2-0.7,1.6
					c-0.4,0.3-1.1,0.5-2,0.5h-2.9v-7.3h2.6c0.9,0,1.6,0.2,2,0.5c0.4,0.3,0.6,0.8,0.6,1.5c0,0.4-0.1,0.7-0.2,0.9
					C363.2,391.4,363,391.6,362.7,391.7 M363.7,388.3h1.9l1.5,2.6l1.5-2.6h1.9l-2.6,4.2v3.1h-1.8v-3.1L363.7,388.3 M369.7,392h2.9
					v1.4h-2.9V392 M378.7,388.5v1.5c-0.4-0.2-0.7-0.3-1.1-0.4c-0.4-0.1-0.7-0.1-1-0.1c-0.4,0-0.7,0.1-0.9,0.2
					c-0.2,0.1-0.3,0.3-0.3,0.6c0,0.2,0.1,0.3,0.2,0.5c0.1,0.1,0.4,0.2,0.7,0.3l0.7,0.2c0.8,0.2,1.3,0.4,1.6,0.7
					c0.3,0.3,0.5,0.8,0.5,1.4c0,0.8-0.2,1.4-0.7,1.8c-0.4,0.4-1.1,0.6-2,0.6c-0.4,0-0.9,0-1.3-0.1c-0.4-0.1-0.9-0.2-1.3-0.4v-1.6
					c0.4,0.2,0.9,0.4,1.3,0.6c0.4,0.1,0.8,0.2,1.2,0.2c0.4,0,0.7-0.1,0.9-0.2c0.2-0.1,0.3-0.3,0.3-0.6c0-0.2-0.1-0.4-0.2-0.5
					c-0.1-0.1-0.4-0.2-0.8-0.3l-0.7-0.2c-0.7-0.2-1.2-0.4-1.5-0.7c-0.3-0.3-0.5-0.8-0.5-1.4c0-0.7,0.2-1.3,0.7-1.7
					c0.4-0.4,1.1-0.6,1.9-0.6c0.4,0,0.8,0,1.2,0.1C377.8,388.3,378.2,388.4,378.7,388.5 M384.8,394.2H382l-0.4,1.3h-1.8l2.5-7.3h2.1
					l2.5,7.3h-1.8L384.8,394.2 M382.5,392.9h1.9l-0.9-2.9L382.5,392.9"/>
			</g>
		</g>
	</g>
</g>
<g id="Clipper">
</g>
</svg>`
}
)});
  main.variable(observer("ccbysablock")).define("ccbysablock", function(){return(
{
  width: 108,
  height: 36,
  xml: `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.0"
	 id="svg2759" inkscape:output_extension="org.inkscape.output.svg.inkscape" inkscape:version="0.45+devel" sodipodi:docname="by-sa.svg" sodipodi:version="0.32" xmlns:cc="http://web.resource.org/cc/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 108 36"
	 enable-background="new 0 0 108 36" xml:space="preserve">
<sodipodi:namedview  bordercolor="#8b8b8b" borderopacity="1" gridtolerance="10000" guidetolerance="10" height="42px" id="base" inkscape:current-layer="layer1" inkscape:cx="179" inkscape:cy="89.569904" inkscape:document-units="px" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:showpageshadow="false" inkscape:window-height="624" inkscape:window-width="1198" inkscape:window-x="488" inkscape:window-y="401" inkscape:zoom="1" objecttolerance="10" pagecolor="#ffffff" width="120px">
	</sodipodi:namedview>
<g id="layer1" inkscape:groupmode="layer" inkscape:label="Layer 1">
	
		<g id="g287" transform="matrix(0.9937807,0,0,0.9936694,-177.69409,-74.436409)" inkscape:export-filename="/mnt/hgfs/Bov/Documents/Work/2007/cc/identity/srr buttons/big/by-sa.png" inkscape:export-xdpi="300.23013" inkscape:export-ydpi="300.23013">
		<path id="path3817_2_" fill="#AAB2AB" d="M181.4,74.9l103.4,0.2c1.4,0,2.7-0.2,2.7,2.8l-0.1,33.2H178.8V77.8
			C178.8,76.3,179,74.9,181.4,74.9z"/>
		<g id="g5908_2_" transform="matrix(0.872921,0,0,0.872921,50.12536,143.2144)">
			<path id="path5906_2_" fill="#FFFFFF" d="M181.7-57.5c0,7.5-6.1,13.6-13.6,13.6c-7.5,0-13.6-6.1-13.6-13.6c0,0,0,0,0,0
				c0-7.5,6.1-13.6,13.6-13.6C175.7-71.1,181.7-65,181.7-57.5C181.7-57.5,181.7-57.5,181.7-57.5z"/>
			<g id="g5706_2_" transform="translate(-289.6157,99.0653)">
				<path id="path5708_2_" d="M468.8-167.6c3,3,4.5,6.7,4.5,11.1c0,4.4-1.5,8-4.4,10.9c-3.1,3.1-6.9,4.6-11.1,4.6
					c-4.2,0-7.9-1.5-10.9-4.6c-3.1-3.1-4.6-6.7-4.6-11c0-4.3,1.5-7.9,4.6-11.1c3-3,6.6-4.5,10.9-4.5
					C462.1-172.1,465.8-170.6,468.8-167.6z M448.8-165.6c-2.5,2.6-3.8,5.6-3.8,9c0,3.5,1.3,6.4,3.8,9c2.5,2.5,5.5,3.8,9,3.8
					c3.5,0,6.5-1.3,9.1-3.8c2.4-2.4,3.7-5.3,3.7-8.9c0-3.6-1.2-6.6-3.7-9c-2.5-2.5-5.5-3.7-9-3.7S451.3-168.1,448.8-165.6z
					 M455.5-158.1c-0.4-0.8-1-1.3-1.7-1.3c-1.4,0-2.1,0.9-2.1,2.8c0,1.8,0.7,2.8,2.1,2.8c0.9,0,1.6-0.4,1.9-1.4l1.9,1
					c-0.9,1.6-2.3,2.4-4.1,2.4c-1.4,0-2.5-0.4-3.4-1.3c-0.8-0.9-1.3-2-1.3-3.5c0-1.5,0.4-2.7,1.3-3.5c0.9-0.9,2-1.3,3.2-1.3
					c1.9,0,3.3,0.8,4.1,2.3L455.5-158.1z M464.5-158.1c-0.4-0.8-1-1.3-1.7-1.3c-1.4,0-2.1,0.9-2.1,2.8c0,1.8,0.7,2.8,2.1,2.8
					c0.9,0,1.5-0.4,1.9-1.4l1.9,1c-0.9,1.6-2.3,2.4-4.1,2.4c-1.4,0-2.5-0.4-3.4-1.3c-0.8-0.9-1.3-2-1.3-3.5c0-1.5,0.4-2.7,1.3-3.5
					c0.9-0.9,1.9-1.3,3.3-1.3c1.9,0,3.3,0.8,4.1,2.3L464.5-158.1z"/>
			</g>
		</g>
		<path id="path294" d="M285.5,74.9H180.7c-1.1,0-1.9,0.9-1.9,1.9v33.9c0,0.2,0.2,0.4,0.4,0.4H287c0.2,0,0.4-0.2,0.4-0.4V76.8
			C287.5,75.8,286.6,74.9,285.5,74.9z M180.7,75.8h104.8c0.6,0,1.1,0.5,1.1,1.1c0,0,0,13.6,0,23.5h-76.3c-2.6,4.7-7.6,7.9-13.4,7.9
			c-5.8,0-10.8-3.2-13.4-7.9h-3.7c0-9.9,0-23.5,0-23.5C179.7,76.3,180.2,75.8,180.7,75.8z"/>
		<g id="g296" enable-background="new    ">
			<path id="path298" fill="#FFFFFF" d="M251.2,107.8c0.1,0.2,0.2,0.3,0.3,0.4c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4,0.1,0.6,0.1
				c0.1,0,0.3,0,0.4,0c0.1,0,0.3-0.1,0.4-0.1c0.1-0.1,0.2-0.1,0.3-0.3c0.1-0.1,0.1-0.2,0.1-0.4c0-0.2-0.1-0.3-0.2-0.4
				c-0.1-0.1-0.3-0.2-0.5-0.3c-0.2-0.1-0.4-0.1-0.6-0.2c-0.2-0.1-0.5-0.1-0.7-0.2c-0.2-0.1-0.5-0.1-0.7-0.2
				c-0.2-0.1-0.4-0.2-0.6-0.4c-0.2-0.1-0.3-0.3-0.5-0.5c-0.1-0.2-0.2-0.5-0.2-0.8c0-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.3-0.5,0.6-0.6
				c0.2-0.2,0.5-0.3,0.8-0.4c0.3-0.1,0.6-0.1,0.9-0.1c0.3,0,0.7,0,1,0.1c0.3,0.1,0.6,0.2,0.9,0.4c0.2,0.2,0.4,0.4,0.6,0.7
				c0.1,0.3,0.2,0.6,0.2,1h-1.4c0-0.2-0.1-0.4-0.1-0.5c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1-0.1-0.3-0.1-0.4-0.2c-0.2,0-0.3,0-0.5,0
				c-0.1,0-0.2,0-0.4,0c-0.1,0-0.2,0.1-0.3,0.1c-0.1,0.1-0.2,0.1-0.2,0.2c-0.1,0.1-0.1,0.2-0.1,0.4c0,0.1,0,0.2,0.1,0.3
				c0,0.1,0.1,0.2,0.3,0.2c0.1,0.1,0.3,0.1,0.6,0.2s0.6,0.2,1,0.3c0.1,0,0.3,0.1,0.5,0.1s0.4,0.2,0.7,0.3c0.2,0.1,0.4,0.3,0.6,0.6
				c0.2,0.2,0.2,0.5,0.2,0.9c0,0.3-0.1,0.6-0.2,0.8c-0.1,0.3-0.3,0.5-0.5,0.7c-0.2,0.2-0.5,0.3-0.9,0.4c-0.3,0.1-0.7,0.2-1.2,0.2
				c-0.4,0-0.7,0-1.1-0.1c-0.3-0.1-0.7-0.2-0.9-0.4c-0.3-0.2-0.5-0.4-0.6-0.7c-0.2-0.3-0.2-0.7-0.2-1.1h1.4
				C251.1,107.5,251.1,107.6,251.2,107.8z"/>
			<path id="path300" fill="#FFFFFF" d="M259.4,102.8l2.5,6.7h-1.5l-0.5-1.5h-2.5l-0.5,1.5h-1.5l2.5-6.7H259.4z M259.5,106.9
				l-0.8-2.4h0l-0.9,2.4H259.5z"/>
		</g>
		<g id="g302" enable-background="new    ">
			<path id="path304" fill="#FFFFFF" d="M225.6,102.8c0.3,0,0.6,0,0.9,0.1c0.3,0.1,0.5,0.1,0.7,0.3c0.2,0.1,0.3,0.3,0.4,0.5
				c0.1,0.2,0.2,0.5,0.2,0.8c0,0.3-0.1,0.6-0.2,0.8c-0.2,0.2-0.4,0.4-0.7,0.6c0.4,0.1,0.7,0.3,0.9,0.6c0.2,0.3,0.3,0.7,0.3,1.1
				c0,0.3-0.1,0.6-0.2,0.9c-0.1,0.2-0.3,0.4-0.5,0.6c-0.2,0.2-0.5,0.3-0.8,0.3c-0.3,0.1-0.6,0.1-0.9,0.1h-3.2v-6.7L225.6,102.8
				L225.6,102.8z M225.4,105.5c0.3,0,0.5-0.1,0.6-0.2c0.2-0.1,0.3-0.3,0.3-0.6c0-0.2,0-0.3-0.1-0.4c-0.1-0.1-0.1-0.2-0.2-0.2
				c-0.1-0.1-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.4,0H224v1.6H225.4z M225.5,108.3c0.1,0,0.3,0,0.4,0c0.1,0,0.2-0.1,0.3-0.1
				c0.1-0.1,0.2-0.2,0.2-0.3s0.1-0.3,0.1-0.4c0-0.3-0.1-0.6-0.3-0.7c-0.2-0.1-0.4-0.2-0.8-0.2H224v1.8H225.5z"/>
			<path id="path306" fill="#FFFFFF" d="M228.3,102.8h1.6l1.6,2.6l1.6-2.6h1.6l-2.5,4.1v2.6h-1.5v-2.6L228.3,102.8z"/>
		</g>
		<g id="g6316_1_" transform="matrix(0.624995,0,0,0.624995,391.2294,176.9332)">
			<path id="path6318_1_" fill="#FFFFFF" d="M-203.4-142.3c0,7.3-5.9,13.2-13.2,13.2c-7.3,0-13.2-5.9-13.2-13.2c0,0,0,0,0,0
				c0-7.3,5.9-13.2,13.2-13.2C-209.3-155.5-203.4-149.6-203.4-142.3C-203.4-142.3-203.4-142.3-203.4-142.3z"/>
			<g id="g6320_1_" transform="translate(-23.9521,-89.72962)">
				<path id="path6322_1_" d="M-192.8-67.1c-4,0-7.4,1.4-10.2,4.2c-2.9,2.9-4.3,6.3-4.3,10.3s1.4,7.4,4.3,10.2
					c2.9,2.8,6.3,4.3,10.2,4.3c4,0,7.4-1.4,10.4-4.3c2.8-2.7,4.1-6.1,4.1-10.2c0-4.1-1.4-7.5-4.2-10.3
					C-185.3-65.7-188.7-67.1-192.8-67.1z M-192.7-64.5c3.3,0,6.1,1.2,8.4,3.5c2.3,2.3,3.5,5.1,3.5,8.4c0,3.3-1.1,6.1-3.4,8.3
					c-2.4,2.4-5.2,3.5-8.5,3.5c-3.2,0-6-1.2-8.4-3.5c-2.3-2.3-3.5-5.1-3.5-8.3c0-3.2,1.2-6,3.6-8.4C-198.8-63.3-196-64.5-192.7-64.5
					z"/>
				<path id="path6324_1_" d="M-199.2-54.6c0.6-3.6,3.1-5.6,6.4-5.6c4.6,0,7.4,3.4,7.4,7.8c0,4.4-3,7.8-7.5,7.8
					c-3.1,0-5.9-1.9-6.4-5.7h3.7c0.1,1.9,1.4,2.6,3.2,2.6c2.1,0,3.4-1.9,3.4-4.8c0-3.1-1.2-4.7-3.3-4.7c-1.6,0-3,0.6-3.3,2.6l1.1,0
					l-2.9,2.9l-2.9-2.9L-199.2-54.6z"/>
			</g>
		</g>
		<g id="g313">
			
				<circle id="circle315" sodipodi:cx="242.56226" sodipodi:cy="90.224609" sodipodi:rx="10.8064" sodipodi:ry="10.8064" fill="#FFFFFF" cx="228.6" cy="88.2" r="8.4">
			</circle>
			<g id="g317">
				<path id="path319" d="M231.1,85.8c0-0.3-0.3-0.6-0.6-0.6h-3.7c-0.3,0-0.6,0.3-0.6,0.6v3.7h1v4.4h2.8v-4.4h1L231.1,85.8
					L231.1,85.8z"/>
				
					<circle id="circle321" sodipodi:cx="242.5498" sodipodi:cy="84.083008" sodipodi:rx="1.63232" sodipodi:ry="1.63232" cx="228.6" cy="83.4" r="1.3">
				</circle>
			</g>
			<path id="path323" d="M228.6,78.9c-2.5,0-4.6,0.9-6.4,2.6c-1.8,1.8-2.7,4-2.7,6.4s0.9,4.6,2.7,6.4c1.8,1.8,3.9,2.7,6.4,2.7
				c2.5,0,4.7-0.9,6.5-2.7c1.7-1.7,2.6-3.8,2.6-6.4s-0.9-4.7-2.6-6.4C233.3,79.8,231.1,78.9,228.6,78.9z M228.6,80.6
				c2.1,0,3.8,0.7,5.2,2.2c1.5,1.4,2.2,3.2,2.2,5.3c0,2.1-0.7,3.8-2.1,5.2c-1.5,1.5-3.3,2.2-5.3,2.2c-2,0-3.8-0.7-5.2-2.2
				c-1.5-1.5-2.2-3.2-2.2-5.2c0-2,0.7-3.8,2.2-5.3C224.8,81.3,226.6,80.6,228.6,80.6z"/>
		</g>
	</g>
</g>
</svg>
`
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`# Kudos
* [Mike Bostock](https://beta.observablehq.com/@mbostock) for:
 * explaining to [use global unique IRIs](https://talk.observablehq.com/t/render-differences-summary-page-and-real-page/1250/2?u=martien) for SVG gradients, patterns, and definitions, again; and
 * how to [\`getBBox()\` before adding the element to the DOM](https://talk.observablehq.com/t/getbbox/1222/3?u=martien).
* [bgchen](https://talk.observablehq.com/u/bgchen/summary) for sharing how [to get the name of an object](https://talk.observablehq.com/t/how-to-get-a-cell-s-name/1246/12?u=martien) (see \`howToImport()\`.
* [Taras Novak](https://beta.observablehq.com/@randomfractals) for interesting conversations on how to best do things.
* [David Hall](https://beta.observablehq.com/@david-hall/gcd-algorithms) for saving me from having to code \`gcd()\`.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`# Imports`
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("https://d3js.org/d3.v5.min.js")
)});
  main.variable(observer("gcd")).define("gcd", function(){return(
function gcd(a,b) {
  if(b === 0){
        return a;
    }
    return gcd(b, a%b);
}
)});
  return main;
}
