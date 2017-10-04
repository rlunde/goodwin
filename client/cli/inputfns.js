/* supported?, name, example url, input function, generator function */
function inputFunction(vis) {
  //console.log(`inputFunction passed ${JSON.stringify(vis)}`)
  let fn = funcs[vis.inputfn];
  if (fn != undefined) {
    let props = fn();
    console.log(`printArgs is ${JSON.stringify(printArgs)}`);
    let gen = argsGenerator(vis, props);
    fn.nextArg = () => gen.next().value;
    return fn;
  } else {
    console.log("undefined input function: " + vis.name)
    return undefined
  }
}
var funcs = {
  iBarChart: function(rl) {
    let props = {
      source_dir: {
        name: "sample code directory",
        type: "directory",
        set: false,
        default: "sample_bar_chart"
      },
      barColor: {
        name: "bar color",
        type: "color",
        set: false,
        default: "blue"
      },
      barHoverColor: {
        name: "bar hover color",
        type: "color",
        set: false,
        default: "red"
      },
      domain: {
        min: {
          name: "domain min (x-axis)",
          type: "number",
          set: false,
          default: 0
        },
        max: {
          name: "domain max (x-axis)",
          type: "number",
          set: false,
          default: 100
        }
      },
      range: { // y-axis
        min: {
          name: "range min (y-axis)",
          type: "number",
          set: false,
          default: 0
        },
        max: {
          name: "range max (y-axis)",
          type: "number",
          set: false,
          default: 100
        }
      },
      data_type: {
        name: "data source type",
        type: "choice", // or tsv, or api
        selections: ["csv", "tsv", "api"],
        default: "csv",
        set: false
      },
      data_source: {
        name: "data source",
        type: "string",
        default: "input.csv",
        set: false
      }
    }
    return props;
  }
}
let argsGenerator = function *(vis, props) {
  console.log(`parameters for: ${vis.name}`);
  for (var key in props) {
      if (props.hasOwnProperty(key)) {
        let p = props[key];
        //console.log(`${key}, props: ${props}, props[key]: ${p}`)
        if (p.name != null) {
          if (p.set && p.value != null) {
            console.log(`    ${p.name} (${p.value}) > `);
            yield p;
          }
          else {
            console.log(`    ${p.name} (${p.default} (default) ) > `);
            yield p;
          }
        }
      }
    }
}

var printArgs = argsGenerator();
// let printArgs = function(vis, props) {
//   console.log(`parameters for: ${vis.name}`);
//   for (var key in props) {
//       if (props.hasOwnProperty(key)) {
//         let p = props[key];
//         //console.log(`${key}, props: ${props}, props[key]: ${p}`)
//         if (p.name != null) {
//           if (p.set && p.value != null) {
//             console.log(`    ${p.name}: ${p.value}`);
//           }
//           else {
//             console.log(`    ${p.name}: ${p.default} (default)`);
//           }
//         }
//       }
//     }
// }

module.exports.input = inputFunction;
