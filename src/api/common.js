/**
 * 请求统一管理
 */
import axios from 'axios';
import Request from '../common/request';

/* Common */
export const getQiniuToken = () => Request.get('/recyclingQuestionnaire/token'); // 七牛get token
export const submitData = (data) => Request.post('/recyclingQuestionnaire/submit', data); // 提交数据
