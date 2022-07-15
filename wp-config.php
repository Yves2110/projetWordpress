<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache


/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'wordpress' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );
define('FS_METHOD', 'direct');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'HZ=gs| 4IUq5g+dBZwrwIAaCr3a+[($7C8Hh>eF/`4iDZaNr|g$y;9D:4bK~bq9V' );
define( 'SECURE_AUTH_KEY',  '(:kiy<_ AZ_TcEi%6}k0odETFoPac`X&3mOs0L}f~]{=Mh~VPg`*hcsq^&7IQN:m' );
define( 'LOGGED_IN_KEY',    '.c2Wt}l19@w9Nk_t&4#]N[KDF$8/u$j`RFq}WxN{M[|_rwgPtog|xlwbaA/.{9:1' );
define( 'NONCE_KEY',        'NRf7XGLK9?f&:NQSSP@^2x9d_YOGE@{=NO Tyo]WTrx#w/tL_r==Fp<.w[okZTlr' );
define( 'AUTH_SALT',        '.>L9xXR@`0)xD_eU+MfTo}p=PwJh_+R@3~en3;;AWnyn:pf6KtE$ {aA{ATpwT*$' );
define( 'SECURE_AUTH_SALT', 'mP2-kW^~kn`FJi1vf3cx^CHuQ&g}~>%*l.`$[>G$V[Rz@x.37[md*;gOPa#aKpx/' );
define( 'LOGGED_IN_SALT',   '|0KBZb#8|H]4!+A.ym8;)mUbZ]EgQk&[/a[KX-5 QE)Tpb+n-jOdGsTkNc &yj@L' );
define( 'NONCE_SALT',       'DEjhhOlb;Qn `4vN+!kl4YH~$IqDQqNj5?c[8+Bcw3BB3h$[?1O(Q;0wMGjkAH)8' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );
