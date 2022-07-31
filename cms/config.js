export const config = {
  cms_manual_init: true,
  backend: {
    repo: "mat-krol/yoga-with-ania",
    name: "git-gateway",
    branch: "main",
    squash_merges: true,
  },
  local_backend: true,
  media_folder: "public/img",
  public_folder: "img",
  collections: [
    {
      name: "pages",
      label: "Pages",
      files: [
        {
          label: "About",
          name: "about",
          file: "cms/pages/about.md",
          fields: [
            {
              label: "Title",
              name: "title",
              widget: "string",
            },
            {
              label: "Body",
              name: "body",
              widget: "markdown",
            },
          ],
        },
      ],
    },
  ],
};
