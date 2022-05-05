import { DeletePaymentById } from './mutation/deletePaymentById';
import { UpsertPaymentById } from './mutation/upsertPaymentById';
import { FindPaymentById } from './query/findPaymentById';

export default [FindPaymentById, UpsertPaymentById, DeletePaymentById];
