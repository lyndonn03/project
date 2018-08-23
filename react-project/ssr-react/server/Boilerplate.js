const Boilerplate = ( title, content ) => {
  return `
    <!Doctype HTML>
    <HTML>
      <HEAD>
        <TITLE>${title}</TITLE>
      </HEAD>

      <BODY>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </BODY>
    </HTML>
  `;
}

export default Boilerplate;
