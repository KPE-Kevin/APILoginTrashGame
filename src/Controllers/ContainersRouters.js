class ContainersRouters {
    constructor() {
        this.Routers = [];
        const Router = {
            dir: '',
            router: null
        }

        this.GetRouter = () => {
            return Router;
        }
    }

    SetRouter(_dir = null, _rout = null) {
        if (_dir != null && _rout != null) {
            const router = this.GetRouter();
            router.dir = _dir;
            router.router = _rout;

            // console.log(router)
            this.Routers.push(router)
        }
    }

}

export default ContainersRouters;