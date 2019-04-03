import { plugins, use } from '@wordpress/data';

use(plugins.controls);
use(plugins.persistence, { storageKey: 'WP_DATA_USER_1' });
