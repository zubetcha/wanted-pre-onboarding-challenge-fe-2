/**
 * TodoItem 타입 정의
 * @typedef {Object} TodoItem
 * @property {number} id - todo의 고유한 id
 * @property {string} content - 할 일 내용
 * @property {boolean} isDone - todo의 완료 여부 상태
 * @property {string} category - todo의 카테고리
 * @property {string[]} [tags] - todo의 태그들
 */

/**
 * Todo 생성자
 * @constructor
 * @return {Object} - 사용할 수 있는 메서드들을 가지고 있는 객체
 */
function Todo() {}

/**
 * 할 일을 추가할 수 있다.
 * 내용없이 추가할 수 없다.
 *
 * @function create
 * @desc 하나의 Todo를 생성하는 메서드
 * @param {TodoItem} todo - todo 객체
 * @return {TodoItem} - 생성된 todo 객체
 */
Todo.prototype.create = (todo) => {};

/**
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 * 모든 할 일을 조회할 수 있다.
 *
 * @function get
 * @desc 모든 Todo 리스트 또는 특정 Todo를 가져오는 메서드
 * @param {number} [id] - 조회하고자 하는 특정 Todo의 id
 * @return {(TodoItem | TodoItem[])}
 */
Todo.prototype.get = (id) => {};

/**
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 *
 * @function update
 * @desc 특정 Todo의 내용 및 태그를 수정하는 메서드
 * @param {number} id - 수정하고자 하는 Todo의 id
 * @param {number} [index] - 수정하고자 하는 태그의 인덱스
 * @return {TodoItem}
 */
Todo.prototype.update = (id, index) => {};

/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * 모든 할 일을 제거할 수 있다.
 *
 * @function delete
 * @desc 특정 Todo 또는 모든 Todo 리스트를 삭제하는 메서드
 * @param {number} [id] - 삭제하고자 하는 Todo의 id
 * @return {void}
 */
Todo.prototype.delete = (id) => {};

/**
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 *
 * @function deleteTags
 * @desc 특정 할 일의 특정 태그 또는 모든 태그를 삭제하는 메서드
 * @param {number} id - 태그를 삭제하고자 하는 Todo의 id
 * @param {number} [index] - 삭제하고자 하는 태그의 인덱스
 * @return {void}
 */
Todo.prototype.deleteTags = (id, index) => {};

const todo = new Todo();

todo.create();
todo.get();
todo.update();
todo.delete();
todo.deleteTags();
