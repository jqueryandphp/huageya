// @ts-nocheck
import { IRouteComponentProps } from 'umi'

// only export isBrowser for user
export { isBrowser } from '/Users/zb/www/umi_demo3/node_modules/_@umijs_utils@3.2.20@@umijs/utils/lib/ssr.js';

interface IParams extends Pick<IRouteComponentProps, 'match'> {
  isServer: Boolean;
  [k: string]: any;
}

export type IGetInitialProps<T = any> = (params: IParams) => Promise<T>;
