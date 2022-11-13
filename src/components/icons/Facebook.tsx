import type {Component} from 'solid-js';
import type {IconProps} from './IconProps';

/**
 * @copyright Remix Icon <https://remixicon.com/>
 */
const Facebook: Component<IconProps> = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={props?.width || '1em'}
    height={props?.height || '1em'}
    class={props?.class || ''}
  >
    <path fill='none' d='M0 0h24v24H0z' />
    <path
      fill={props?.color || 'currentColor'}
      d='M14 19h5V5H5v14h7v-5h-2v-2h2v-1.654c0-1.337.14-1.822.4-2.311A2.726 2.726 0 0 1 13.536 6.9c.382-.205.857-.328 1.687-.381.329-.021.755.005 1.278.08v1.9H16c-.917 0-1.296.043-1.522.164a.727.727 0 0 0-.314.314c-.12.226-.164.45-.164 1.368V12h2.5l-.5 2h-2v5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z'
    />
  </svg>
);

export default Facebook;
