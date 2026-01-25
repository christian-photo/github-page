import spec from '$lib/assets/websocket_spec.yaml';
import { ScalarApiReference } from '@scalar/sveltekit';
import type { RequestHandler } from './$types';

const render = ScalarApiReference({
	url: spec,
	hideTestRequestButton: true,
	hideClientButton: true,
	hideDownloadButton: false,
	theme: 'deepSpace',
	defaultHttpClient: { targetKey: 'python', clientKey: 'python' },
	telemetry: false,
	customCss: `.parameter-item-trigger[data-v-2b6dfab9] {
  display:flex;
  align-items:baseline;
  height: 50px;
  gap:6px;
  flex-wrap:wrap;
  padding:12px 0;
  outline:none
}`
});

export const GET: RequestHandler = () => {
	return render();
};
