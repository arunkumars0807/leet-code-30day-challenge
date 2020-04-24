var List = function(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
}


/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.hash = new Map();
    
    this.start = null;
    this.end = null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    var node = this.hash.get(key);
    if (node !== undefined) {
        this.changePriority(node);
        return node.value;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    var node = this.hash.get(key);
    if (node !== undefined) {
        this.changePriority(node, value);
    } else {
        if (this.hash.size >= this.capacity) {
            this.evict();
        }
        this.push(key, value);
    }
};

LRUCache.prototype.removeNode = function(node) {
    if (node.left !== null) {
        node.left.right = node.right;
    } else {
        this.start = node.right;
    }
    
    if (node.right !== null) {
        node.right.left = node.left;
    } else {
        this.end = node.left;
    }
}

LRUCache.prototype.putAtFirst = function(node) {
    node.right = this.start;
    node.left = null;
    
    if (this.start !== null) {
        this.start.left = node;
    }
    this.start = node;
    
    if (this.end === null) {
        this.end = this.start;
    }
}

LRUCache.prototype.changePriority = function(node, value) {
    if (value !== undefined) {
        node.value = value;
    }
    this.removeNode(node);
    this.putAtFirst(node);
}

LRUCache.prototype.evict = function() {
    this.hash.delete(this.end.key);
    this.removeNode(this.end);
}

LRUCache.prototype.push = function(key, value) {
    var node = new List(key, value);
    this.putAtFirst(node);
    this.hash.set(key, node);
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
