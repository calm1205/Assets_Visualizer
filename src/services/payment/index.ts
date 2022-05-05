import { DeletePaymentByIdService } from './deletePaymentById.service';
import { FindPaymentByIdService } from './findPaymentById.service';
import { UpsertPaymentService } from './upsertPaymentById.service';

export default [
  FindPaymentByIdService,
  UpsertPaymentService,
  DeletePaymentByIdService,
];
