const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('./img', false, /\.(gif|jfif|jpg|png|jpe?g|svg)$/));

export default images;
