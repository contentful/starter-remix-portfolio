var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.jsx",
      lineNumber: 11,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("@remix-run/react");

// app/components/NavBar.jsx
var import_react2 = require("@remix-run/react"), import_react3 = require("react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function NavBar() {
  let [isOpen, setIsOpen] = (0, import_react3.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between px-4 py-2 sm:p-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { role: "img", "aria-label": "dog", className: "text-5xl", children: "\u{1F436}" }, void 0, !1, {
        fileName: "app/components/NavBar.jsx",
        lineNumber: 17,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/NavBar.jsx",
        lineNumber: 16,
        columnNumber: 6
      }, this) }, void 0, !1, {
        fileName: "app/components/NavBar.jsx",
        lineNumber: 15,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "button",
        {
          type: "button",
          className: "text-primary focus:text-gray-800 hover:text-primary sm:hidden dark:text-white dark:focus:text-primary",
          onClick: (e) => {
            e.preventDefault(), setIsOpen((previous) => !previous);
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "svg",
            {
              className: "fill-current h-6 w-6",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" }, void 0, !1, {
                  fileName: "app/components/NavBar.jsx",
                  lineNumber: 32,
                  columnNumber: 9
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" }, void 0, !1, {
                  fileName: "app/components/NavBar.jsx",
                  lineNumber: 34,
                  columnNumber: 9
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "Menu" }, void 0, !1, {
                  fileName: "app/components/NavBar.jsx",
                  lineNumber: 36,
                  columnNumber: 8
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/NavBar.jsx",
              lineNumber: 26,
              columnNumber: 7
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/NavBar.jsx",
          lineNumber: 21,
          columnNumber: 6
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/NavBar.jsx",
        lineNumber: 20,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 14,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 pb-2 items-center flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "div",
      {
        className: `${isOpen ? "block" : "hidden"} sm:flex sm:justify-between sm:p-0 sm:text-lg dark:text-white`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { to: "/writings", className: "block py-1 underline-anim underline-animate sm:ml-4 text-primary", children: "Writings" }, void 0, !1, {
            fileName: "app/components/NavBar.jsx",
            lineNumber: 47,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { to: "/talks", className: "mt-1 block py-1 underline-anim underline-animate sm:mt-0 sm:ml-4  text-primary", children: "Talks" }, void 0, !1, {
            fileName: "app/components/NavBar.jsx",
            lineNumber: 50,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { to: "/projects", className: "mt-1 block py-1 underline-anim underline-animate sm:mt-0 sm:ml-4  text-primary", children: "Projects" }, void 0, !1, {
            fileName: "app/components/NavBar.jsx",
            lineNumber: 53,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { to: "/about", className: "mt-1 block py-1 underline-anim underline-animate sm:mt-0 sm:ml-4  text-primary", children: "About" }, void 0, !1, {
            fileName: "app/components/NavBar.jsx",
            lineNumber: 56,
            columnNumber: 7
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/NavBar.jsx",
        lineNumber: 42,
        columnNumber: 5
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 41,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NavBar.jsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-IDAX3HAZ.css";

// app/root.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Corgi's Playground",
  description: "Meet Corgi, the smart cuddly creature that everyone loves!",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavBar, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "container mx-auto pt-8 sm:pt-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { className: "fixed bottom-0 w-screen p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-sm text-gray-500 sm:text-center dark:text-gray-400", children: [
          "Created with ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://remix.run/", className: "hover:underline", children: "Remix" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 38,
            columnNumber: 92
          }, this),
          " and ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://contentful.com/", className: "hover:underline", children: "Contentful" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 38,
            columnNumber: 163
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 38,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://www.contentful.com/remix-tutorial/", className: "mr-4 hover:underline md:mr-6 ", children: "Read More" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 42,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://github.com/contentful/starter-remix-portfolio", className: "mr-4 hover:underline md:mr-6", children: "GitHub" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 45,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 44,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 40,
          columnNumber: 5
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/routes/writings._index.jsx
var writings_index_exports = {};
__export(writings_index_exports, {
  default: () => Writings,
  loader: () => loader,
  meta: () => meta2
});

// app/components/Title.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Title({ title, emoji }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "text-3xl leading-normal sm:text-5xl sm:leading-normal font-body dark:text-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "rounded border-b-4 border-primary dark:border-secondary", children: title }, void 0, !1, {
      fileName: "app/components/Title.jsx",
      lineNumber: 4,
      columnNumber: 13
    }, this),
    "\xA0",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { role: "img", "aria-label": title, children: emoji }, void 0, !1, {
      fileName: "app/components/Title.jsx",
      lineNumber: 5,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Title.jsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/models/contentful.server.js
var import_plaiceholder = require("plaiceholder"), SPACE = process.env.CONTENTFUL_SPACE_ID, TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
async function apiCall(query, variables) {
  let fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`, options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`
    },
    body: JSON.stringify({ query, variables })
  };
  return await fetch(fetchUrl, options);
}
async function getProjects() {
  let formattedData = await (await (await apiCall(`
    {
        projectsCollection (order:releaseDate_DESC){
            items {
                title
                desc {
                    json
                }
                releaseDate
                link
                previewImage {
                    description
                    url
                }
            }
        }
    }`)).json()).data.projectsCollection.items.map(
    async (project) => {
      let { title, desc, releaseDate, link, previewImage } = project, { css, img } = await (0, import_plaiceholder.getPlaiceholder)(previewImage.url);
      return {
        title,
        desc,
        releaseDate,
        link,
        image: img,
        imageAlt: previewImage.description,
        css
      };
    }
  );
  return Promise.all(formattedData);
}
async function getTalks() {
  return await (await (await apiCall(`{
        talksCollection {
            items {
                sys {
                    id
                }
                title
                description {
                    json
                }
                link
                type
                previewImage {
                    description
                    url
                }
            }
        }
    }`)).json()).data.talksCollection.items;
}
async function getAllBlogs() {
  return await (await (await apiCall(`
    {
        blogCollection(order:sys_firstPublishedAt_DESC) {
        items {
          title
          slug
          description
          tag
          sys {
            firstPublishedAt
          }
        }
      }
    }
    `)).json()).data.blogCollection.items;
}
async function getSingleBlog(slug) {
  return await (await (await apiCall(`
    query($slug: String){
        blogCollection(where: {slug:$slug}) {
            items {
                title
                description
                tag
                canonicalUrl
                blogBody {
                  json
                }
                sys {
                  publishedAt
                }
                openGraphImage {
                  url
                }
              }
            }
    }
    `, {
    slug
  })).json()).data.blogCollection.items[0];
}
async function getPage(title) {
  return await (await (await apiCall(`
    query($title:String) {
        pageCollection(where:{title:$title}){
          items{
            title
            description{
              json
            }
            rolesCollection{
              items{
                roleTitle
              }
            }
            linksCollection{
              items {
                name
                url
              }
            }
            seoMetadata{
              title
              ogImage {
                url
              }
              description
            }
          }
        }
      }
    `, {
    title
  })).json()).data.pageCollection.items[0];
}
var client = { getProjects, getTalks, getAllBlogs, getSingleBlog, getPage };

// app/routes/writings._index.jsx
var import_node = require("@remix-run/node"), import_react5 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
async function loader() {
  let blogs = await client.getAllBlogs(), page = await client.getPage("Writings");
  return (0, import_node.json)({ blogs, page });
}
var meta2 = ({ data }) => {
  let { seoMetadata } = data.page;
  return {
    title: seoMetadata.title,
    description: seoMetadata.description,
    "og:image": `${seoMetadata.ogImage.url}`
  };
};
function PostList(data) {
  return data.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-8 pb-2 border-b-2 border-light last:border-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: post.slug, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-xl font-medium sm:text-3xl cursor-pointer hover:text-gray-800 dark:text-gray-300 dark:hover:text-secondary", children: post.title }, void 0, !1, {
      fileName: "app/routes/writings._index.jsx",
      lineNumber: 26,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/writings._index.jsx",
      lineNumber: 25,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "py-2 sm:py-4 text-sm sm:text-lg font-body dark:text-gray-400", children: post.description }, void 0, !1, {
      fileName: "app/routes/writings._index.jsx",
      lineNumber: 28,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex justify-between mb-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-sm sm:text-lg dark:text-gray-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { role: "image", "aria-label": "calendar emoji", children: [
          "\u{1F5D3} ",
          " "
        ] }, void 0, !0, {
          fileName: "app/routes/writings._index.jsx",
          lineNumber: 31,
          columnNumber: 25
        }, this),
        new Date(post.sys.firstPublishedAt).toDateString()
      ] }, void 0, !0, {
        fileName: "app/routes/writings._index.jsx",
        lineNumber: 30,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "", children: post.tag.map(
        (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "mr-1 sm:mr-2 text-xs sm:text-sm rounded-full py-1 px-2 sm:px-3 text-primary dark:text-secondary", children: [
          "#",
          item
        ] }, item, !0, {
          fileName: "app/routes/writings._index.jsx",
          lineNumber: 40,
          columnNumber: 33
        }, this)
      ) }, void 0, !1, {
        fileName: "app/routes/writings._index.jsx",
        lineNumber: 36,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/writings._index.jsx",
      lineNumber: 29,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: `writings/${post.slug}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "pt-1 sm:pt-2 text-xs sm:text-base text-primary cursor-pointer hover:text-hover w-fit dark:text-secondary", children: [
      "Read More ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { role: "image", "aria-label": "arrow", children: "\u2192" }, void 0, !1, {
        fileName: "app/routes/writings._index.jsx",
        lineNumber: 49,
        columnNumber: 151
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/writings._index.jsx",
      lineNumber: 49,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/writings._index.jsx",
      lineNumber: 48,
      columnNumber: 17
    }, this)
  ] }, post.slug, !0, {
    fileName: "app/routes/writings._index.jsx",
    lineNumber: 24,
    columnNumber: 13
  }, this));
}
function Writings() {
  let { blogs } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "px-8 sm:px-0 sm:max-w-2xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Title, { title: "Writings", emoji: "\u{1F4DD}" }, void 0, !1, {
      fileName: "app/routes/writings._index.jsx",
      lineNumber: 61,
      columnNumber: 13
    }, this),
    PostList(blogs)
  ] }, void 0, !0, {
    fileName: "app/routes/writings._index.jsx",
    lineNumber: 60,
    columnNumber: 9
  }, this);
}

// app/routes/writings.$slug.jsx
var writings_slug_exports = {};
__export(writings_slug_exports, {
  default: () => PostSlug,
  loader: () => loader2,
  meta: () => meta3,
  richTextRenderOptions: () => richTextRenderOptions
});
var import_node2 = require("@remix-run/node"), import_react6 = require("@remix-run/react");
var import_rich_text_react_renderer = require("@contentful/rich-text-react-renderer"), import_rich_text_types = require("@contentful/rich-text-types"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), loader2 = async ({ params }) => {
  let { slug } = params;
  return (0, import_node2.json)(await client.getSingleBlog(slug));
}, meta3 = ({ data }) => {
  let { title, description, openGraphImage } = data;
  return {
    title,
    description,
    "og:image": `${openGraphImage.url}`
  };
}, richTextRenderOptions = {
  renderNode: {
    [import_rich_text_types.INLINES.HYPERLINK]: (node, children) => {
      let { data } = node, { uri } = data;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "a",
        {
          className: "text-primary underline dark:text-secondary",
          target: "_blank",
          href: uri,
          children: children[0]
        },
        void 0,
        !1,
        {
          fileName: "app/routes/writings.$slug.jsx",
          lineNumber: 28,
          columnNumber: 17
        },
        this
      );
    },
    [import_rich_text_types.BLOCKS.PARAGRAPH]: (node, children) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-gray-700 text-base dark:text-gray-400 leading-relaxed mb-4 text-justify", children }, void 0, !1, {
      fileName: "app/routes/writings.$slug.jsx",
      lineNumber: 39,
      columnNumber: 17
    }, this),
    [import_rich_text_types.BLOCKS.HEADING_1]: (node, children) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "text-4xl", children }, void 0, !1, {
      fileName: "app/routes/writings.$slug.jsx",
      lineNumber: 44,
      columnNumber: 17
    }, this),
    [import_rich_text_types.BLOCKS.HEADING_2]: (node, children) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "text-3xl", children }, void 0, !1, {
      fileName: "app/routes/writings.$slug.jsx",
      lineNumber: 49,
      columnNumber: 17
    }, this)
  }
};
function PostSlug() {
  let { title, description, tag, blogBody, sys, canonicalUrl } = (0, import_react6.useLoaderData)(), canonicalName = "";
  return canonicalUrl && (canonicalName = canonicalUrl.replace("https://", "").split("/")[0]), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "sm:max-w-3xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "px-4 sm:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Title, { title }, void 0, !1, {
      fileName: "app/routes/writings.$slug.jsx",
      lineNumber: 65,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/writings.$slug.jsx",
      lineNumber: 64,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("article", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "post px-4 sm:px-0", children: [
      canonicalUrl ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-lg mb-6 italic", children: [
        "This blog was originally shared on",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: canonicalUrl, children: canonicalName }, void 0, !1, {
          fileName: "app/routes/writings.$slug.jsx",
          lineNumber: 72,
          columnNumber: 29
        }, this),
        "."
      ] }, void 0, !0, {
        fileName: "app/routes/writings.$slug.jsx",
        lineNumber: 70,
        columnNumber: 25
      }, this) : null,
      (0, import_rich_text_react_renderer.documentToReactComponents)(blogBody.json, richTextRenderOptions)
    ] }, void 0, !0, {
      fileName: "app/routes/writings.$slug.jsx",
      lineNumber: 68,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/writings.$slug.jsx",
      lineNumber: 67,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-hover italic", children: [
      "Last Updated: ",
      new Date(sys.publishedAt).toDateString()
    ] }, void 0, !0, {
      fileName: "app/routes/writings.$slug.jsx",
      lineNumber: 81,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/writings.$slug.jsx",
    lineNumber: 63,
    columnNumber: 9
  }, this);
}

// app/routes/projects.jsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Projects,
  loader: () => loader3,
  meta: () => meta4,
  richTextRenderOptions: () => richTextRenderOptions2
});
var import_node3 = require("@remix-run/node"), import_react7 = require("@remix-run/react");
var import_framer_motion = require("framer-motion"), import_rich_text_react_renderer2 = require("@contentful/rich-text-react-renderer"), import_rich_text_types2 = require("@contentful/rich-text-types"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
async function loader3() {
  let projects = await client.getProjects(), page = await client.getPage("Projects");
  return (0, import_node3.json)({ projects, page });
}
var meta4 = ({ data }) => {
  let { title, description, ogImage } = data.page.seoMetadata;
  return {
    title,
    description,
    "og:image": `${ogImage.url}`
  };
}, richTextRenderOptions2 = {
  renderNode: {
    [import_rich_text_types2.INLINES.HYPERLINK]: (node, children) => {
      let { data } = node, { uri } = data;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "a",
        {
          className: "text-primary underline dark:text-secondary",
          target: "_blank",
          href: uri,
          children: children[0]
        },
        void 0,
        !1,
        {
          fileName: "app/routes/projects.jsx",
          lineNumber: 30,
          columnNumber: 9
        },
        this
      );
    },
    [import_rich_text_types2.BLOCKS.PARAGRAPH]: (node, children) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-gray-700 text-base dark:text-gray-400", children }, void 0, !1, {
      fileName: "app/routes/projects.jsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  }
};
function Projects() {
  let { projects } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "px-4 sm:px-48", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Title, { title: "Projects", emoji: "\u{1F4BB}" }, void 0, !1, {
      fileName: "app/routes/projects.jsx",
      lineNumber: 51,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-3", children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_framer_motion.motion.div,
      {
        className: "mt-8 max-w-sm rounded overflow-hidden shadow-lg bg-white h-auto dark:bg-gray-700",
        whileHover: {
          scale: 1.02,
          transition: {
            duration: 0.2,
            ease: "easeInOut"
          }
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "div",
            {
              style: {
                position: "relative",
                display: "block",
                overflow: "hidden"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      transform: "scale(1.5)",
                      filter: "blur(40px)"
                      // ...project.css,
                    }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/projects.jsx",
                    lineNumber: 73,
                    columnNumber: 10
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { ...project.image }, void 0, !1, {
                  fileName: "app/routes/projects.jsx",
                  lineNumber: 87,
                  columnNumber: 10
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/projects.jsx",
              lineNumber: 66,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "px-6 py-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "font-bold text-lg sm:text-xl mb-2 dark:text-secondary", children: [
              project.title,
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: project.link, target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "span",
                {
                  role: "image",
                  "aria-label": "internet",
                  className: "cursor-pointer",
                  children: "\u{1F517}"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/projects.jsx",
                  lineNumber: 93,
                  columnNumber: 12
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/projects.jsx",
                lineNumber: 92,
                columnNumber: 11
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/projects.jsx",
              lineNumber: 90,
              columnNumber: 10
            }, this),
            (0, import_rich_text_react_renderer2.documentToReactComponents)(
              project.desc.json,
              richTextRenderOptions2
            )
          ] }, void 0, !0, {
            fileName: "app/routes/projects.jsx",
            lineNumber: 89,
            columnNumber: 9
          }, this)
        ]
      },
      project.title,
      !0,
      {
        fileName: "app/routes/projects.jsx",
        lineNumber: 55,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/projects.jsx",
      lineNumber: 52,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects.jsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader4,
  meta: () => meta5
});
var import_react_text_loop_next = require("react-text-loop-next"), import_framer_motion2 = require("framer-motion"), import_node4 = require("@remix-run/node"), import_react8 = require("@remix-run/react");
var import_fa = require("react-icons/fa"), import_node5 = require("@remix-run/node"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
async function loader4() {
  return (0, import_node4.json)(await client.getPage("Corgi"));
}
var meta5 = ({ data }) => {
  let { seoMetadata } = data;
  return {
    title: seoMetadata.title,
    description: seoMetadata.description,
    "og:image": `${seoMetadata.ogImage.url}`
  };
};
function Index() {
  let { title, rolesCollection, linksCollection } = (0, import_react8.useLoaderData)(), links2 = {};
  return linksCollection.items.forEach((link) => {
    Object.assign(links2, Object.fromEntries([Object.values(link)]));
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-center mt-24 sm:mt-24 dark:text-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "text-3xl sm:text-6xl", children: [
      "Hello",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_framer_motion2.motion.div,
        {
          animate: {
            rotate: [0, 5, 0, -5, 0]
          },
          transition: {
            duration: 0.5,
            ease: "easeInOut",
            loop: "Infinity",
            repeatDelay: 2
          },
          className: "inline-block",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { role: "img", "aria-label": "wave", children: "\u{1F44B}" }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 44,
            columnNumber: 7
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.jsx",
          lineNumber: 33,
          columnNumber: 6
        },
        this
      ),
      ", I'm ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-primary dark:text-secondary", children: [
        " ",
        title
      ] }, void 0, !0, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 48,
        columnNumber: 12
      }, this),
      "!"
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 31,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 30,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react_text_loop_next.TextLoop, { children: rolesCollection.items.map((role) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "text-2xl sm:text-4xl w-48", children: role.roleTitle }, role.roleTitle, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)) }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 52,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 51,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-8 sm:mt-16 flex justify-between sm:mx-64 mx-12 dark:text-secondary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: links2.GitHub, target: "_blank", "aria-label": "GitHub", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_fa.FaGithub, { className: "h-12 w-12 sm:h-16 sm:w-16 fill-current" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 61,
        columnNumber: 64
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 61,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: links2.Twitter, target: "_blank", "aria-label": "Twitter", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_fa.FaTwitter, { className: "h-12 w-12 sm:h-16 sm:w-16 fill-current" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 62,
        columnNumber: 66
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 62,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: links2.LinkedIn, target: "_blank", "aria-label": "LinkedIn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_fa.FaLinkedin, { className: "h-12 w-12 sm:h-16 sm:w-16 fill-current" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 63,
        columnNumber: 68
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 63,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: links2.Twitch, target: "_blank", "aria-label": "Twitch", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_fa.FaTwitch, { className: "h-12 w-12 sm:h-16 sm:w-16 fill-current" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 64,
        columnNumber: 64
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 64,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: links2.YouTube, target: "_blank", "aria-label": "YouTube", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_fa.FaYoutube, { className: "h-12 w-12 sm:h-16 sm:w-16 fill-current" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 65,
        columnNumber: 66
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 65,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 60,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 29,
    columnNumber: 3
  }, this);
}

// app/routes/about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  loader: () => loader5,
  meta: () => meta6,
  richTextRenderOptions: () => richTextRenderOptions3
});
var import_node6 = require("@remix-run/node"), import_react9 = require("@remix-run/react");
var import_rich_text_react_renderer3 = require("@contentful/rich-text-react-renderer"), import_rich_text_types3 = require("@contentful/rich-text-types"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
async function loader5() {
  return (0, import_node6.json)(await client.getPage("About"));
}
var meta6 = ({ data }) => {
  let { seoMetadata } = data;
  return {
    title: seoMetadata.title,
    description: seoMetadata.description
  };
}, richTextRenderOptions3 = {
  renderNode: {
    [import_rich_text_types3.INLINES.HYPERLINK]: (node, children) => {
      let { data } = node, { uri } = data;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "a",
        {
          className: "text-primary underline dark:text-secondary",
          target: "_blank",
          href: uri,
          children: children[0]
        },
        void 0,
        !1,
        {
          fileName: "app/routes/about.jsx",
          lineNumber: 26,
          columnNumber: 6
        },
        this
      );
    }
  }
};
function About() {
  let { description } = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "px-8 sm:px-0 sm:max-w-2xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Title, { title: "About", emoji: "\u{1F64B}\u200D\u2642\uFE0F" }, void 0, !1, {
      fileName: "app/routes/about.jsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-4 text-lg dark:text-gray-300", children: (0, import_rich_text_react_renderer3.documentToReactComponents)(description.json, richTextRenderOptions3) }, void 0, !1, {
      fileName: "app/routes/about.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.jsx",
    lineNumber: 41,
    columnNumber: 9
  }, this);
}

// app/routes/talks.jsx
var talks_exports = {};
__export(talks_exports, {
  default: () => Talks,
  loader: () => loader6,
  meta: () => meta7
});
var import_node7 = require("@remix-run/node"), import_react10 = require("@remix-run/react");
var import_framer_motion3 = require("framer-motion"), import_rich_text_react_renderer4 = require("@contentful/rich-text-react-renderer"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
async function loader6() {
  let talks = await client.getTalks(), page = await client.getPage("Talks");
  return (0, import_node7.json)({ talks, page });
}
var meta7 = ({ data }) => {
  let { title, description, ogImage } = data.page.seoMetadata;
  return {
    title,
    description,
    "og:image": `${ogImage.url}`
  };
};
function Talks() {
  let { talks } = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "px-4 sm:px-48", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Title, { title: "Talks", emoji: "\u{1F399}" }, void 0, !1, {
      fileName: "app/routes/talks.jsx",
      lineNumber: 27,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid gap-6 sm:grid-cols-3", children: talks.map((item) => {
      let { link, sys, description, title, type, previewImage } = item;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "a",
        {
          href: link,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            import_framer_motion3.motion.div,
            {
              className: "mt-8 max-w-sm rounded overflow-hidden shadow-lg bg-white cursor-pointer dark:bg-gray-700",
              whileHover: {
                scale: 1.05,
                transition: {
                  duration: 0.4,
                  ease: "easeInOut"
                }
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                  "div",
                  {
                    style: {
                      position: "relative",
                      display: "block",
                      overflow: "hidden"
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                        "div",
                        {
                          style: {
                            position: "absolute",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            transform: "scale(1.5)",
                            filter: "blur(40px)"
                          }
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/talks.jsx",
                          lineNumber: 53,
                          columnNumber: 10
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { src: previewImage.url, alt: previewImage.description }, void 0, !1, {
                        fileName: "app/routes/talks.jsx",
                        lineNumber: 67,
                        columnNumber: 10
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/routes/talks.jsx",
                    lineNumber: 46,
                    columnNumber: 9
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "px-6 py-4", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "font-semibold text-lg mb-2 dark:text-secondary", children: title }, void 0, !1, {
                    fileName: "app/routes/talks.jsx",
                    lineNumber: 70,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: (0, import_rich_text_react_renderer4.documentToReactComponents)(
                    description.json
                  ) }, void 0, !1, {
                    fileName: "app/routes/talks.jsx",
                    lineNumber: 73,
                    columnNumber: 10
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/talks.jsx",
                  lineNumber: 69,
                  columnNumber: 9
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/talks.jsx",
              lineNumber: 36,
              columnNumber: 8
            },
            this
          )
        },
        sys.id,
        !1,
        {
          fileName: "app/routes/talks.jsx",
          lineNumber: 32,
          columnNumber: 7
        },
        this
      );
    }) }, void 0, !1, {
      fileName: "app/routes/talks.jsx",
      lineNumber: 28,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/talks.jsx",
    lineNumber: 26,
    columnNumber: 3
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-CJWPMJX7.js", imports: ["/build/_shared/chunk-BUSRVAOG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-O4SJCX4V.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-C7NZBXQY.js", imports: ["/build/_shared/chunk-QBVSZCK3.js", "/build/_shared/chunk-3RUDRDSS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-YFXOXO7I.js", imports: ["/build/_shared/chunk-64LFJQB5.js", "/build/_shared/chunk-IPXY34UZ.js", "/build/_shared/chunk-6IWD2KR4.js", "/build/_shared/chunk-3RUDRDSS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects": { id: "routes/projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects-AAPJSSZM.js", imports: ["/build/_shared/chunk-64LFJQB5.js", "/build/_shared/chunk-QBVSZCK3.js", "/build/_shared/chunk-IPXY34UZ.js", "/build/_shared/chunk-6IWD2KR4.js", "/build/_shared/chunk-3RUDRDSS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/talks": { id: "routes/talks", parentId: "root", path: "talks", index: void 0, caseSensitive: void 0, module: "/build/routes/talks-A5EE7TGD.js", imports: ["/build/_shared/chunk-QBVSZCK3.js", "/build/_shared/chunk-IPXY34UZ.js", "/build/_shared/chunk-6IWD2KR4.js", "/build/_shared/chunk-3RUDRDSS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/writings.$slug": { id: "routes/writings.$slug", parentId: "root", path: "writings/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/writings.$slug-RCWZPGQD.js", imports: ["/build/_shared/chunk-64LFJQB5.js", "/build/_shared/chunk-IPXY34UZ.js", "/build/_shared/chunk-6IWD2KR4.js", "/build/_shared/chunk-3RUDRDSS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/writings._index": { id: "routes/writings._index", parentId: "root", path: "writings", index: !0, caseSensitive: void 0, module: "/build/routes/writings._index-33IV6OAK.js", imports: ["/build/_shared/chunk-6IWD2KR4.js", "/build/_shared/chunk-3RUDRDSS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "08c395e8", hmr: void 0, url: "/build/manifest-08C395E8.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/writings._index": {
    id: "routes/writings._index",
    parentId: "root",
    path: "writings",
    index: !0,
    caseSensitive: void 0,
    module: writings_index_exports
  },
  "routes/writings.$slug": {
    id: "routes/writings.$slug",
    parentId: "root",
    path: "writings/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: writings_slug_exports
  },
  "routes/projects": {
    id: "routes/projects",
    parentId: "root",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/talks": {
    id: "routes/talks",
    parentId: "root",
    path: "talks",
    index: void 0,
    caseSensitive: void 0,
    module: talks_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
