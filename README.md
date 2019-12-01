# Relatório: Um quadro sobre um supermercado em Fortaleza

https://observablehq.com/@matheusbarrio/relatorio-um-quadro-sobre-um-supermercado-em-fortaleza@350

View this notebook in your browser by running a web server in this folder. For
example:

~~~sh
python -m SimpleHTTPServer
~~~

Or, use the [Observable Runtime](https://github.com/observablehq/runtime) to
import this module directly into your application. To npm install:

~~~sh
npm install @observablehq/runtime@4
npm install https://api.observablehq.com/d/32c6c6e9c270b1ab.tgz?v=3
~~~

Then, import your notebook and the runtime as:

~~~js
import {Runtime, Inspector} from "@observablehq/runtime";
import define from "@matheusbarrio/relatorio-um-quadro-sobre-um-supermercado-em-fortaleza";
~~~

To log the value of the cell named “foo”:

~~~js
const runtime = new Runtime();
const main = runtime.module(define);
main.value("foo").then(value => console.log(value));
~~~
