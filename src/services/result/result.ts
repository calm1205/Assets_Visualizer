import { ResultOutput } from '~/interfaces/outputs/result.outputs';

/**
 * mutationの返り値
 */
export class Result {
  constructor(args: unknown) {
    this.result = { result: !!args };
  }

  result: ResultOutput;
}
