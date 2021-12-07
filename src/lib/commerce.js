import Commerce from '@chec/commerce.js';
require('dotenv').config()
const commerce = new Commerce(process.env.REACT_APP_SANDBOX_PUBLIC_KEY , true);
export default commerce;