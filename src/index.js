/**
 * Creates a new Todo.
 * @class
 */
function Todo() {}

/**
 * 할 일을 추가할 수 있다.
 * 내용없이 추가할 수 없다.
 * @param {Object} todo - todo 객체
 * @param {number} todo.id - required
 * @param {string} todo.content - required
 * @param {boolean} todo.isDone - required
 * @param {string} todo.category - required
 * @param {string[]} [todo.tags] - optional
 * @return {Obejct} - 생성된 Todo 객체
 */
Todo.prototype.create = ({ id, content, isDone, category, tags }) => {};

/**
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 * 모든 할 일을 조회할 수 있다.
 * @param {number} [id] - optional 조회하려고 하는 Todo의 id
 * @return {(Object | Object[])}
 */
Todo.prototype.read = (id) => {};

/**
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 * @param {number} id - required 수정하려고 하는 Todo의 id
 * @param {number} [index] - optional 수정하려고 하는 태그의 인덱스
 */
Todo.prototype.update = (id, index) => {};

/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * 모든 할 일을 제거할 수 있다.
 * @param {number} [id] - optional 삭제하려고 하는 Todo의 id
 */
Todo.prototype.delete = (id) => {};

/**
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 * @param {number} id - required 태그를 삭제하려고 하는 Todo의 id
 * @param {number} [index] - optional 삭제하려고 하는 태그의 인덱스
 */
Todo.prototype.deleteTags = (id, index) => {};

const todo = new Todo();
