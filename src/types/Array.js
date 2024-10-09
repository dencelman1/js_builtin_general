
export default () => {
    
    Array.prototype.toLocaleString = function() {
        return (
            JSON.stringify(
                this,
                null,
                2
            )
        )
    };
    
};
