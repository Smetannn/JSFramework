class Math3D {
    constructor({ WIN }) {
        this.WIN = WIN;
    }
    xs(point) {
        const zs = this.WIN.CENTER.z;
        const z0 = this.WIN.CAMERA.z;
        const x0 = this.WIN.CAMERA.x;
        return ((point.x - x0) / (point.z - z0) * (zs - z0) + x0);
    }

    ys(point) {
        const zs = this.WIN.CENTER.z;
        const z0 = this.WIN.CAMERA.z;
        const y0 = this.WIN.CAMERA.y;
        return ((point.y - y0) / (point.z - z0) * (zs - z0) + y0);
    }
    multMatrix(T,m){
        const c=[0,0,0,0];
        for (let i=0;i<4;i++){
            let s=0;
            for(let j=0;j<4;j++){
                s+=T[j][i]*m[j];
            }
            c[i]=s;
        }
        return c;
    }
    
    zoom(delta,point){
        const array=this.multMatrix([
        [delta,0,0,0],
        [0,delta,0,0],
        [0,0,delta,0],
        [0,0,0,1]],[point.x,point.y,point.z,1]);
    point.x=array[0];
    point.y=array[1];
    point.z=array[2];
    }
    
    move(sx,sy,sz,point){
        const array=this.multMatrix([
        [1,0,0,0],
        [0,1,0,0],
        [0,0,1,0],
        [sx,sy,sz,1]],[point.x,point.y,point.z,1]);
    point.x=array[0];
    point.y=array[1];
    point.z=array[2];
    }
    rotateOx(alpha,point){
        const array=this.multMatrix([
        [1,0,0,0],
        [0,Math.cos(alpha),Math.sin(alpha),0],
        [0,-Math.sin(alpha),Math.cos(alpha),0],
        [0,0,0,1]],[point.x,point.y,point.z,1]);
        point.x=array[0];
        point.y=array[1];
        point.z=array[2];
    }
    rotateOy(alpha,point){
        const array=this.multMatrix([
        [Math.cos(alpha),0,-Math.sin(alpha),0],
        [0,1,0,0],
        [Math.sin(alpha),0,Math.cos(alpha),0],
        [0,0,0,1]],[point.x,point.y,point.z,1]);
        point.x=array[0];
        point.y=array[1];
        point.z=array[2];
    }
    rotateOz(alpha,point){
            const array=this.multMatrix([
        [Math.cos(alpha),Math.sin(alpha),0,0],
        [-Math.sin(alpha),Math.cos(alpha),0,0],
        [0,0,1,0],
        [0,0,0,1]],[point.x,point.y,point.z,1]);
        point.x=array[0];
        point.y=array[1];
        point.z=array[2];
}
}