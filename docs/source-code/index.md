---
title: Obtaining Source Code
description: "Download the source code of Kendo UI for Vue Native components."
slug: source_code_installation
position: 6
category: setup
level: 0
---

# Obtaining Source Code

To obtain the source code of the components download the source code from the Kendo UI for Vue [Lerna](https://github.com/lerna/lerna)-based mono repository.

> The source code is available only for commercial-license holders and you will be asked to enter your credentials.

## Source Repository

1. To obtain the full source code, clone a repository from the Kendo UI for Vue Native Git mirror. The repository contains the complete revision history of the official releases.

    ```sh
    git clone https://kendo.git.progress.com/kendo-vue-private.git
    ```

1. To update your clone, run `git pull`. The mirror repository is updated daily.

### Tags

The source repository contains tags for each official release&mdash;for example, `"v1.0.0"` or `"v1.1.0"`. To get the full list of all tags, run `git tag`.

### Branches

The source repository contains a single `master` branch. It corresponds to the `latest` NPM `dist`-tag and represents the current official release of the package that you normally get by running `npm install`.

## Building from Source

> You can use the repository for building modified versions of the official package. However, the Kendo UI for Vue Native license prohibits the redistribution of modified versions of the packages.

1. In each individual package, replace the metadata in the `package.json` file to make your package name unique.

    ```json
    {
      "name": "my-lovely-kendo-vue-component",
      "description": "Customized vue package",
      "version": "1.0.0"
    }
    ```

1. Run `npm install` to install all developer dependencies.
1. Run `npm run bootstrap` to bootstrap the monorepo packages and link any cross-dependencies.
1. Run `npm run build-packages` to build all monorepo packages. Every build is created in the corresponding [monorepo package folder](https://github.com/lerna/lerna/#what-does-a-lerna-repo-look-like).
1. Run `./node_modules/.bin/lerna exec -- npm pack` to produce NPM package for all monorepo packages.
1. Use the newly built package in your application.

    ```sh
        npm install --save my-lovely-kendo-vue-component-1.0.0.tgz
    ```

## Submitting Your Credentials

To avoid being asked for your credentials while you clone a repository, store them.

### Choosing Storage Options

To store your credentials, either:

* Cache your credentials by storing them as plain text in a [`.netrc`](http://www.mavetju.org/unix/netrc.php) file, or
* Store your credentials by using the Git credential helpers. For detailed information on how to do this, refer to Stack Overflow and follow the discussion on [skipping the password typing](http://stackoverflow.com/questions/5343068/is-there-a-way-to-skip-password-typing-when-using-https-github).

### Storing on Windows

1. Create a text file called `_netrc` in your home directory&mdash;for example, `c:\users\jane\_netrc`.
1. Declare a `HOME` environment variable.

    ```sh
    C:\> SETX HOME %USERPROFILE%
    ```

1. Add your credentials by applying the following format:

    ```sh
    machine kendo.git.progress.com
        login my-progress.identity@example.com
        password mysecret
    ```

If your home directory contains spaces in its path, Git might experience problems when it tries to access it&mdash;for example, `c:\Documents and Settings\jane`. To avoid such issues, set your `%HOME%` environment variable so that it points to a directory and has no spaces in its name.

### Storing on Linux, OS X, and Unix-Like Systems

1. In your home directory, create a file called `.netrc` (`~/.netrc`). Modify the file permissions so that the file is readable only for you.

    ```sh
    touch ~/.netrc
    chmod 0600 ~/.netrc
    ```

1. Add your credentials to the `~/.netrc` file by using the following format:

    ```sh
    machine kendo.git.progress.com
        login my-progress.identity@example.com
        password mysecret
    ```

## Troubleshooting

This section provides solutions for common issues you might encounter while cloning the source code repository.

### SSL Issues Occur on Windows

You might see the following error message:

```sh
fatal: unable to access 'https://kendo.git.progress.com/kendo-vue-private.git/': SSL certificate problem: unable to get local issuer certificate
```

**Cause** The underlying Git installation is missing the certificate bundle.

**Solution** Follow the steps in the [Adding a corporate (or self-signed) certificate authority to git.exe’s store](https://docs.microsoft.com/archive/blogs/phkelley/adding-a-corporate-or-self-signed-certificate-authority-to-git-exes-store) MSDN blog post.

> If you have to use the `@` symbol in the URL because of, for example, network restrictions or admin rules, encode it as `https://firstname.lasname%40domain.com@kendo.git.progress.com/kendo-vue-private.git`.

## Suggested Links

* [Getting Started - First steps with Javascript](slug:getting_started)
* [Getting Started - First steps with Typescript](slug:getting_started_typescript)
* [Getting Started - First steps with Typescript + Composition API](slug:getting_started_typescript_composition_api)
