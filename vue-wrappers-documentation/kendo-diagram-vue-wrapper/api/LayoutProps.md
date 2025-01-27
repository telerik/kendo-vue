---
title: layoutProps API
description: "API Index | layoutProps"
api_reference: true
slug: api_diagram_layoutprops
---

# LayoutProps

### layout-end-radial-angle `Number`

Defines where the circle or arc ends. The positive direction is clockwise and the angle is in degrees. The `layout-end-radial-angle` setting is specific to the radial tree layout.

### layout-grid-component-spacing-x `Number`

Defines the horizontal spacing between each component. Defaults to `50`.

### layout-grid-component-spacing-y `Number`

Defines the vertical spacing between each component. Defaults to `50`.

### layout-grid-offset-x `Number`

Defines the left offset of the grid layout. Defaults to `50`.

### layout-grid-offset-y `Number`

Defines the top offset of the grid layout. Defaults to `50`.

### layout-grid-width `Number`

Defines the width of the grid. The bigger the `layout-grid-width` parameter, the more components will be organized in a horizontal row. The number of the components depends on your Diagram and the layout type which is applied to each component. Defaults to `800`.

### layout-horizontal-separation `Number`

Defines either the distance between the siblings if the tree is up or down, or between the levels if the tree is left or right. In a `tipOver` tree layout `layout-horizontal-separation` is used only for the direct children of the root.

### layout-iterations `Number`

The number of times that all the forces in the Diagram are calculated and balanced. Defaults to `300` which is considered enough for Diagrams which contain up to 100 nodes. By increasing the `layout-iterations` parameter you increase the correctness of the simulation but this approach does not always lead to a more stable topology (positions of the nodes).

* In some scenarios, a Diagram does not have a stable minimum energy state and oscillates (globally or locally) between the minima. In such cases the increase of the iterations will not result in a better topology.
* In other scenarios, where the symmetry in the Diagram is considered enough, the increased number of iterations leads to a better layout.

`layout-iterations` is specific to force-directed layouts.

### layout-layer-separation `Number`

The height (in a vertical layout) or width (in a horizontal layout) between the layers.

### layout-node-distance `Number`

In the force-directed layout, the `layout-node-distance` setting defines the optimal length between two nodes which directly correlates to the state of the link between them.

* If a link is longer, the force will pull the nodes together.
* If the link is shorter, the force will push the nodes apart.

The optimal length is more an indication in the algorithm than a guarantee that all nodes will be located at this distance. The result of the layout is a combination of the incidence structure of the diagram, the initial topology (positions of the nodes), and the number of iterations.

In the layered layout, the `layout-node-distance` defines the minimum distance between nodes on the same level. Due to the nature of the algorithm, this distance will only be respected if the whole crossing of links and optimization does not induce a shift of the siblings.

`layout-node-distance` is specific to force-directed and layered layouts.

### layout-radial-first-level-separation `Number`

Controls the distance between the root and the immediate children of the root. The `layout-radial-first-level-separation` setting is specific to radial tree layouts.

### layout-radial-separation `Number`

Except for the first level, which is defined by the `radialFirstLevelSeparation`, `layout-radial-separation` defines the radial separation between the levels. `layout-radial-separation` is specific to radial tree layouts.

### layout-start-radial-angle `Number`

Defines where the circle or arc starts. The positive direction is clockwise and the angle is in degrees. `layout-start-radial-angle` is specific to radial tree layouts.

### layout-subtype `String`

Defines the layout type by specifying in greater detail the behavior which is expected by the layout algorithm.

The possible predefined values are:

* (Default) `down`&mdash;A specific subtype for tree and layered layouts. In the tree layout, the root is arranged at the top and its children downwards. For the layered layout, the links are directed downwards. This is the default subtype.
* `up`&mdash;A specific subtype for tree and layered layouts. In the tree layout, the root is arranged at the bottom and its children upwards. For the layered layout, the links are directed upwards.
* `left`&mdash;A specific subtype for the tree and layered layouts. In the tree layout, the root is arranged at the left and its children sideways to the right. For the layered layout, the links are directed to the left.
* `right`&mdash;A specific subtype for the tree and layered layouts. In the tree layout, the root is arranged at the right and its children sideways to the left. For the layered layout, the links are directed downwards.
* `mindmapHorizontal`&mdash;A specific subtype for tree layouts. The root sits at the center and its children are spread equally to the left and right.
* `mindmapVertical`&mdash;A specific subtype for tree layouts. The root sits at the center and its children are spread equally above and below.
* `radial`&mdash;A specific subtype for tree layouts. The root sits at the center and its children are spread radially around.
* `tipOver`&mdash;A specific subtype for tree layouts. Represents a special version of the tree-down layout where the grandchildren (and iteratively) are arranged vertically while the direct children are arranged horizontally. The advantage of this arrangement is that it does not spread as much as the classic tree-down layout.
* `horizontal`&mdash;A specific subtype for layered layouts. The preferred direction of the links is horizontal.
* `vertical`&mdash;A specific subtype for layered layouts. The preferred direction of the links is vertical.

### layout-tip-over-tree-start-level `Number`

Specifies the start level when the subtype is `tipOver`.

### layout-type `String`

The type of the layout algorithm that will be used.

The predefined values are:

* `tree`&mdash;Organizes a Diagram in a hierarchical way and is typically used in organizational representations. This type includes the radial tree layout, mind-mapping, and the classic tree Diagrams.
* `force`&mdash;Represents a force-directed layout algorithm (also known as the spring-embedder algorithm) which is based on a physical simulation of forces that act on the nodes whereby the links define whether two nodes act upon each other. Each link is effectively like a spring that is embedded in the Diagram. The simulation attempts to find a minimum energy state in such a way that the springs are in their base state and, thus, do not pull or push any (linked) node. This force-directed layout is non-deterministic. Each layout pass will result in an unpredictable (and, hence, not reproducible) layout. The optimal length is more an indication in the algorithm than a guarantee that all nodes will be located at this distance. The result of the layout is a combination of the incidence structure of the Diagram, the initial topology (positions of the nodes), and the number of iterations.
* `layered`&mdash;Organizes the Diagram with an emphasis on flow and minimizing the crossing between layers of shapes. This layout works well for few present components and when some sort of top-down flow is present. The concept of flow in this context being a more or less clear direction of the connections with a minimum of cycles (connections flowing back upstream). Layered graph layout is a type of graph layout in which the nodes of a (directed) graph are drawn in horizontal or vertical layers with the links directed in the complementary direction. It is also known as Sugiyama or hierarchical graph layout. When the graph is a tree the layout reduces to a standard tree layout and thus can be considered as an extension to the classic tree layout.

  Several criteria exist on which this algorithm is based and which are respected in as far as the incidence structure allows it:
  * Links have a preferred direction (the complementary direction of the subtype) and attempt to flow as much as possible in this way.
  * Linked nodes try to stay close to one another (clustering of nodes).
  * Links crossings has to be minimized.
  * Links has to be as short as possible (cross a few layers as possible).

The construction of a layered graph drawing proceeds in a series of steps (assuming an horizontal layer from here on):

* If the input graph is not already a directed acyclic graph, a set of edges is identified the reversal of which will make it acyclic.  
* The nodes of the directed acyclic graph resulting from the first step are assigned to layers, such that each link goes from a higher layer to a lower layer.  
* Edges that span multiple layers are replaced by paths of dummy vertices so that, after this step, each edge in the expanded graph connects two vertices on adjacent layers of the drawing.  
* The nodes within each layer are permuted in an attempt to reduce the number of crossings among the edges connecting it to the previous layer.  
* Each node is assigned a coordinate within its layer, consistent with the permutation calculated in the previous step.  
* The edges reversed in the first step of the algorithm are returned to their original orientations, the dummy vertices are removed from the graph and the vertices and edges are drawn.

### layout-underneath-horizontal-offset `Number`

Defines the horizontal offset from a child with respect to its parent. `layout-underneath-horizontal-offset` is specific to `tipOver` tree layouts.

### layout-underneath-vertical-separation `Number`

Defines the vertical separation between siblings and sub-branches. `layout-underneath-vertical-separation` is specific to `tipOver` tree layouts.

### layout-underneath-vertical-top-offset `Number`

Defines the vertical separation between a parent and its first child which offsets the whole set of children with respect to its parent. `layout-underneath-vertical-top-offset` is specific to `tipOver` tree layouts.

### layout-vertical-separation `Number`

Indicates either a distance between levels if the tree is up or down, or between siblings if the tree is left or right. `layout-vertical-separation` is not used in `tipOver` tree layouts but replaced with three additional settings&mdash;`underneathVerticalTopOffset`, `underneathVerticalSeparation`, and `underneathHorizontalOffset`.

## Suggested Links

* [`Layout` in Kendo UI Diagram for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/layout)
