<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'R8sMrjwKm7kFNfrX6z5BNVWGOcqP1EX6R0gvKmNLhJihJ6J3drbzjnbMY5S1+xQmzJotXe0VBIYz4y0e+gszDA==');
define('SECURE_AUTH_KEY',  'RboT5FbGfjv+rwqgNe5R22TntsmtaxJUQuhLhZmcr9CacjoRGeHloMRKwKcTZHkCvL81WUaZRJod7hlXW+Fg7A==');
define('LOGGED_IN_KEY',    'b9Sii3nMZLR7ckYqCnTQHuYYNKv0QhAhtV9uP1ty5CU92OR/gkCDO8GEG4iKXX1AmKfiTVBER/XgK9QBvuhB/g==');
define('NONCE_KEY',        'OHJz3ZREDwgFzTdW8T0qSB6MskuD0Lvk+eadQvS+yDQBpZekHwmIeiZrGJlhldZSu1odNy+4WGXhb0frDqDOtg==');
define('AUTH_SALT',        '1RvTr89bGkJ0McDkDUy63Lr/0N8Cqlr7P6LoiPs0VkpEjrJqEc9/13wKOm5fImYQQWsGUp/bpOk1nTBxmFrW/w==');
define('SECURE_AUTH_SALT', 'YSqeGJNj3Gw4K7fx6eO4cOdDPfc22wfXyrLtytqQ77976fi7ClOyC+3qODcsmYJQ33Jlp86/0xbhKkbx8eKAHQ==');
define('LOGGED_IN_SALT',   'aUS1n5xErmHdv5LPpiMhHIulXzAu00uOxVKIAjxowlo92UPc2ncHe0LW0cPcVKAPaeDDvRsWxEtkIip02Y+pvQ==');
define('NONCE_SALT',       '8YhWAgfIrrRx1gNzqAjDjaPwDUQuTdg4C2lpxOJncT+ZHCiQhxOVpA48X+ijsjg30Jt9F/Bm7N5F5j2fRTVcPg==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
