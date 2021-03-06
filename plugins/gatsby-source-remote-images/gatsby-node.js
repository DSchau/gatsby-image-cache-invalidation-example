const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.onCreateNode = async (
  { actions: { createNode }, node, createContentDigest, store, cache },
  { filter, nodeName = `localFile` }
) => {
  if (filter(node)) {
    const fileNode = await createRemoteFileNode({
      url: node.url,
      store,
      cache,
      createNode,
      createNodeId: createContentDigest,
      parentNodeId: node.id
    })

    if (fileNode) {
      const fileNodeLink = `${nodeName}___NODE`
      node[fileNodeLink] = fileNode.id
    }
  }
}
