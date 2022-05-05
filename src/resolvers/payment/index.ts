import { DeletePaymentById } from './mutation/deletePaymentById';
import { UpsertPayment } from './mutation/upsertPayment';
import { FindPaymentById } from './query/findPaymentById';

export default [FindPaymentById, UpsertPayment, DeletePaymentById];
