export const config = {
  cms_manual_init: true,
  backend: {
    repo: "mat-krol/yoga-with-ania",
    name: "git-gateway",
    branch: "main",
    squash_merges: true,
  },
  local_backend: true,
  logo_url: "",
  media_folder: "public/images",
  public_folder: "images",
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
    {
      name: "sessions",
      label: "Current Schedule",
      folder: "cms/sessions",
      summary:
        "{{year}}/{{month}}/{{day}} - {{hour}}:{{minute}} - {{title}} @ {{location}}",
      create: true,
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Date", name: "date", widget: "datetime" },
        { label: "Location", name: "location", widget: "string" },
        { label: "Link", name: "link", widget: "string" },
      ],
    },
  ],
};
