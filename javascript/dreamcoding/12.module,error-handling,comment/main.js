// default인 경우에는 원하는 이름을 사용해도됨!
// import increase1 from './counter.js';

// increase1();
// increase1();
// increase1();
// increase1();


// {}을 사용해서 이름을 똑같이!
import { increase, getCount } from "./counter.js";
increase();
increase();
increase();

const count = getCount();
console.log('count : ', count);

// as를 사용해서 이름을 변경할 수 있음
// import { increase as increase1} from "./counter.js";
// increase1();
// increase1();
// increase1();

import * as counter from './counter.js';
counter.increase();
console.log('count: ', counter.getCount());