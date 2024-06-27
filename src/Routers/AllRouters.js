import ContainersRouters from '../Controllers/ContainersRouters.js'

import FireBaseUsers from './FireBaseUsers.js'

const Routers = new ContainersRouters();

Routers.SetRouter('/FireBase', FireBaseUsers);

export default Routers;