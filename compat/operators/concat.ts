import {  concat as concatStatic, Observable, ObservableInput, OperatorFunction, MonoTypeOperatorFunction, SchedulerLike } from 'rxjs';

/* tslint:disable:max-line-length */
export function concat<T>(scheduler?: SchedulerLike): MonoTypeOperatorFunction<T>;
export function concat<T, T2>(v2: ObservableInput<T2>, scheduler?: SchedulerLike): OperatorFunction<T, T | T2>;
export function concat<T, T2, T3>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, scheduler?: SchedulerLike): OperatorFunction<T, T | T2 | T3>;
export function concat<T, T2, T3, T4>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, scheduler?: SchedulerLike): OperatorFunction<T, T | T2 | T3 | T4>;
export function concat<T, T2, T3, T4, T5>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, scheduler?: SchedulerLike): OperatorFunction<T, T | T2 | T3 | T4 | T5>;
export function concat<T, T2, T3, T4, T5, T6>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, scheduler?: SchedulerLike): OperatorFunction<T, T | T2 | T3 | T4 | T5 | T6>;
export function concat<T>(...observables: Array<ObservableInput<T> | SchedulerLike>): MonoTypeOperatorFunction<T>;
export function concat<T, R>(...observables: Array<ObservableInput<any> | SchedulerLike>): OperatorFunction<T, R>;
/* tslint:enable:max-line-length */

export function concat<T, R>(...observables: Array<ObservableInput<any> | SchedulerLike>): OperatorFunction<T, R> {
  return (source: Observable<T>) => source.lift.call(concatStatic<T, R>(source, ...observables));
}
