
export default () => {

    Object.prototype.toLocaleString = function() {
        return JSON.stringify(this, null, 2)
    };

}