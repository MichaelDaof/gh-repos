(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "../../../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Star */ "../../../node_modules/@material-ui/icons/Star.js");
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PaginationTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PaginationTable */ "./components/PaginationTable.tsx");
/* harmony import */ var _components_SearchDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SearchDropdown */ "./components/SearchDropdown.tsx");
/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AppBar */ "./components/AppBar.tsx");
/* harmony import */ var _components_ErrorMsg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ErrorMsg */ "./components/ErrorMsg.tsx");
/* harmony import */ var _services_useGithub__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/useGithub */ "./services/useGithub.ts");









function App() {
  var _reposResponse$items;

  const [searchValue, setSearchValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [user, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [typeAhead, setTypeahead] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [page, setPage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const [pageCount, setPageCount] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [pageLimit, setPageLimit] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(10);
  const [githubUsers, loading, error] = Object(_services_useGithub__WEBPACK_IMPORTED_MODULE_8__["useGithubUsers"])(typeAhead ? searchValue : '');
  const [reposResponse, resposLoading, reposError] = Object(_services_useGithub__WEBPACK_IMPORTED_MODULE_8__["useGithubUserRepos"])({
    user,
    pageLimit,
    page
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (reposResponse.total_count) {
      const totalPages = Math.ceil(reposResponse.total_count / pageLimit);
      setPageCount(totalPages);
    }
  }, [reposResponse.total_count, pageLimit]);

  const renderPropPaginationTable = repo => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PaginationTable__WEBPACK_IMPORTED_MODULE_4__["PaginationRow"], {
      key: repo.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PaginationTable__WEBPACK_IMPORTED_MODULE_4__["PaginationCell"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: repo.html_url,
      target: "blank",
      style: {
        textDecoration: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], null, repo.full_name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PaginationTable__WEBPACK_IMPORTED_MODULE_4__["PaginationCell"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      display: "flex",
      alignItems: "center",
      flexDirection: "row-reverse"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_3___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], null, repo.stargazers_count))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    maxWidth: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AppBar__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "100px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SearchDropdown__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: searchValue,
    dropdown: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(githubUsers.items, ({
      id,
      login
    }) => ({
      id,
      value: login
    })),
    onChange: setSearchValue,
    onSubmit: input => {
      setUser(input);
      setSearchValue('');
    }
  }), reposError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ErrorMsg__WEBPACK_IMPORTED_MODULE_7__["default"], {
    message: `Failed to fetch repos for "${user}". May have reached rate limit.`
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: "100%",
    display: "flex",
    marginTop: "50px",
    justifyContent: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    margin: "60px 10px",
    flex: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h2"
  }, user)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    margin: "10px",
    flex: "1",
    display: "flex"
  }, (reposResponse === null || reposResponse === void 0 ? void 0 : (_reposResponse$items = reposResponse.items) === null || _reposResponse$items === void 0 ? void 0 : _reposResponse$items.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PaginationTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: reposResponse.items,
    pageCount: pageCount,
    page: page,
    onChange: (e, page) => {
      setPage(page);
    }
  }, renderPropPaginationTable)))));
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./components/AppBar.tsx":
/*!*******************************!*\
  !*** ./components/AppBar.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../../../node_modules/@material-ui/core/esm/index.js");


function AppBar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
    color: "primary",
    style: {
      backgroundColor: '#2196f3'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    height: "50px",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 40px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "400px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4"
  }, "GitHub Repos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.github.com",
    target: "blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "assets/Octocat.jpg",
    alt: "octocat",
    width: "37px",
    height: "37px",
    style: {
      borderRadius: 20
    }
  }))));
}

/***/ }),

/***/ "./components/ErrorMsg.tsx":
/*!*********************************!*\
  !*** ./components/ErrorMsg.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorMsg; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../../../node_modules/@material-ui/core/esm/index.js");


function ErrorMsg({
  message
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    marginTop: "100px",
    textAlign: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h3"
  }, message));
}

/***/ }),

/***/ "./components/PaginationTable.tsx":
/*!****************************************!*\
  !*** ./components/PaginationTable.tsx ***!
  \****************************************/
/*! exports provided: PaginationRow, PaginationCell, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaginationTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../../../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/Pagination */ "../../../node_modules/@material-ui/lab/esm/Pagination/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Table */ "../../../node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableBody */ "../../../node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableCell */ "../../../node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationCell", function() { return _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableRow */ "../../../node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationRow", function() { return _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "../../../node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableHead */ "../../../node_modules/@material-ui/core/esm/TableHead/index.js");











function PaginationTable({
  data,
  headers = [],
  children,
  onChange,
  pageCount,
  page
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    display: "flex",
    height: "80px",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"], {
    count: pageCount,
    page: page,
    color: "secondary",
    size: "large",
    onChange: onChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], null, headers.map(header => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], null, header.label))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__["default"], null, data.map(children)))));
}

/***/ }),

/***/ "./components/SearchDropdown.tsx":
/*!***************************************!*\
  !*** ./components/SearchDropdown.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../../../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "../../../node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Search */ "../../../node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__);




const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  root: {
    width: 500,
    textAlign: 'center',
    fontSize: 30
  },
  notchedOutline: {
    borderRadius: 50
  },
  typographyRoot: {
    fontSize: 30
  }
});
function SearchInput({
  onSubmit,
  onChange,
  value,
  dropdown = []
}) {
  const {
    notchedOutline,
    root,
    typographyRoot
  } = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    position: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: e => {
      e.preventDefault();

      if (value) {
        onSubmit(value);
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    classes: {
      root
    },
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["OutlinedInput"], {
    value: value,
    classes: {
      notchedOutline,
      root
    },
    inputProps: {
      style: {
        textAlign: 'center'
      }
    },
    placeholder: "Search User...",
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default.a, {
      fontSize: "large"
    }),
    onChange: e => {
      onChange(e.target.value);
    },
    onSubmit: onSubmit
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    position: "absolute",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center"
  }, dropdown.map((item, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      key: item.id,
      display: "flex",
      minHeight: "50px",
      minWidth: "95%",
      maxWidth: "200%",
      borderBottom: "1px solid gray",
      justifyContent: "center",
      alignItems: "center",
      onClick: e => {
        onSubmit(item.value);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      fontSize: "30px",
      width: "80%",
      display: "flex",
      alignItems: "center",
      height: "100%",
      bgcolor: "rgba(255, 255, 255, 0.9)"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      classes: {
        root: typographyRoot
      }
    }, item.value)));
  })));
}

/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app */ "./app/app.tsx");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_app__WEBPACK_IMPORTED_MODULE_2__["default"], null)), document.getElementById('root'));

/***/ }),

/***/ "./services/github.services.ts":
/*!*************************************!*\
  !*** ./services/github.services.ts ***!
  \*************************************/
/*! exports provided: getGithubUsers, getGithubUserRepos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGithubUsers", function() { return getGithubUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGithubUserRepos", function() { return getGithubUserRepos; });
// Generated by https://quicktype.io
// Generated by https://quicktype.io
var GithubSearchApi;

(function (GithubSearchApi) {
  GithubSearchApi["ROOT"] = "https://api.github.com/search";
  GithubSearchApi["USER"] = "/users?q=";
  GithubSearchApi["REPOS"] = "/repositories?q=";
})(GithubSearchApi || (GithubSearchApi = {}));

async function getGithubUsers(user) {
  return fetch(`${GithubSearchApi.ROOT}${GithubSearchApi.USER}${user}`);
}
async function getGithubUserRepos({
  user,
  pageLimit,
  page,
  order
}) {
  const query = `${GithubSearchApi.ROOT}${GithubSearchApi.REPOS}user:${user}&per_page=${pageLimit}&page=${page}&sort=stars&order=desc`;
  return fetch(query);
}

/***/ }),

/***/ "./services/useGithub.ts":
/*!*******************************!*\
  !*** ./services/useGithub.ts ***!
  \*******************************/
/*! exports provided: useGithubUsers, useGithubUserRepos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGithubUsers", function() { return useGithubUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGithubUserRepos", function() { return useGithubUserRepos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _github_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./github.services */ "./services/github.services.ts");


function useGithubUsers(user, debounce) {
  const [response, setResponse] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    items: []
  });
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let current = true;

    if (user) {
      Object(_github_services__WEBPACK_IMPORTED_MODULE_1__["getGithubUsers"])(user).then(res => {
        if (!res.ok) {
          throw res;
        }

        return res.json();
      }).then(data => {
        if (current) {
          setResponse(data);
        }
      }).catch(e => {
        setError(e);
        setResponse({
          items: []
        });
      }).finally(() => setLoading(false));
    } else {
      setResponse({
        items: []
      });
    }

    return () => {
      current = false;
    };
  }, [user]);
  return [response, loading, error];
}
function useGithubUserRepos({
  user,
  pageLimit,
  page
}) {
  const [response, setResponse] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    items: []
  });
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let current = true;

    if (user) {
      Object(_github_services__WEBPACK_IMPORTED_MODULE_1__["getGithubUserRepos"])({
        user,
        pageLimit,
        page,
        order: 'desc'
      }).then(res => {
        if (!res.ok) {
          throw res;
        }

        return res.json();
      }).then(data => {
        if (current) {
          setResponse(data);
        }
      }).catch(e => {
        console.log(e);
        setError(e);
        setResponse({
          items: []
        });
      }).finally(() => setLoading(false));
    }

    return () => {
      current = false;
    };
  }, [user, pageLimit, page]);
  return [response, loading, error];
}

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/michaeldaof/Projects/ruggable-stargazers/apps/stargazers/src/main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map