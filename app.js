
/**
 * <div id="parent">
 *  <div id="child1">
 *      <h1>I'm an h1 tag</h1>
 *      <h12>I'm an h2 tag</h2>
 *  </div>
 *  <div id="child2">
 *      <h1>I'm an h1 tag</h1>
 *      <h12>I'm an h2 tag</h2>
 *  </div>
 * </div>
 */

const parent = React.createElement("div", {id:"parent"},
    [React.createElement("div","child1",
        [React.createElement("h1",{},"I'm and h1 tag"),React.createElement("h2",{},"I'm and h2 tag")]
    ),
    React.createElement("div","child2",
        [React.createElement("h1",{},"I'm and h1 tag"),React.createElement("h2",{},"I'm and h2 tag")]
    )]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);