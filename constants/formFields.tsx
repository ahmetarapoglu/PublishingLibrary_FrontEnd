import { points } from "../service/endPoints"

const categoryFields = [
    {
        component: "AntdInput",
        placeholder: "Category Name",
        data: {
            label: "Category Name",
            name: "categoryName",
            rules: [{ required: true }],
        },
    }
]

const branchFields = [
    {
        component: "AntdInput",
        placeholder: "Branch Name",
        data: {
            label: "Branch Name",
            name: "branchName",
            rules: [{ required: true }],
        }
    },
    {
        component: "AntdInput",
        placeholder: "Branch Address",
        data: {
            label: "Branch Address",
            name: "branchAddress",
            rules: [{ required: true }],
        }
    },
    {
        component: "AntdInput",
        placeholder: "Phone Number",
        data: {
            label: "Phone Number",
            name: "phoneNumber",
            rules: [{ required: true }],
        }
    },
]

const orderFields = [
    {
        component: "AntdSelect",
        placeholder: "Select Branch",
        data: {
            label: "Branch",
            name: "branchId",
            rules: [{ required: true }],
        },
        selectOption: {
            endPointData: points.GetBranches,
            label: "branchName",
            value: "id"
        }
    },
    {
        component: "AntdSelect",
        placeholder: "Select Book Version",
        data: {
            label: "Book Version",
            name: "bookVersionId",
            rules: [{ required: true }],
        },
        selectOption: {
            endPointData: points.GetBooks,
            label: "title",
            value: "id"
        }
    },
    {
        component: "AntdInput",
        placeholder: "Type Your Book Counter",
        data: {
            label: "Book Counter",
            name: "bookCount",
            rules: [{ required: true }],
        }
    }
]

const invoiceFields = [
    {
        component: "AntdSelect",
        placeholder: "Select Order",
        data: {
            label: "Order",
            name: "orderId",
            rules: [{ required: true }],
        },
        selectOption: {
            endPointData: points.GetOrders,
            label: "isInvoiced",
            value: "id"
        }
    },
]

const userFields = [
    {
        component: "AntdInput",
        placeholder: "Type User Name",
        data: {
            label: "User Name",
            name: "userName",
            rules: [{ required: true }],
        },
    },
    {
        component: "AntdInput",
        placeholder: "Type Your Email",
        data: {
            label: "Email",
            name: "email",
            rules: [{ required: true, type: 'email' }],
        },
    },
    {
        component: "AntdInput",
        placeholder: "Type Your Password",
        type: 'password',
        data: {
            label: "Password",
            name: "password",
            rules: [{ required: true }],
        },
    }
]

const authorFields = [
    {
        component: "AntdInput",
        placeholder: "",
        data: {
            label: "Author Name",
            name: "nameSurname",
            rules: [{ required: true }],
        },
    },
    {
        component: "AntdInput",
        placeholder: "",
        data: {
            label: "Country",
            name: "country",
            rules: [{ required: true }],
        },
    },
    {
        component: "AntdInput",
        placeholder: "",
        data: {
            label: "City",
            name: "city",
            rules: [{ required: true }],
        },
    },
    {
        component: "AntdInput",
        placeholder: "",
        data: {
            label: "PostCode",
            name: "postCode",
            rules: [{ required: true }],
        },
    },
    {
        component: "AntdInput",
        placeholder: "",
        data: {
            label: "Email",
            name: "email",
            rules: [{ required: true }],
        },
    },
    {
        component: "AntdInput",
        placeholder: "",
        data: {
            label: "PhoneNumber",
            name: "phoneNumber",
            rules: [{ required: true }],
        },
    },
    {
        component: "AntdInput",
        placeholder: "",
        data: {
            label: "Native Language",
            name: "nativeLanguage",
            rules: [{ required: true }],
        },
    },
    {
        component: "AntdInput",
        placeholder: "",
        data: {
            label: "Education",
            name: "education",
            rules: [{ required: true }],
        },
    },
]

const bookFields = [
    {
        component: "AntdInput",
        placeholder: "Title",
        data: {
            label: "Title",
            name: "title",
            rules: [{ required: true }],
        },
    },
    {
        component: "AntdInput",
        placeholder: "Description",
        data: {
            label: "Description",
            name: "description",
            rules: [{ required: true }],
        },
    },
    {
        component: "AntdDatePicker",
        placeholder: "PublishedDate",
        data: {
            label: "PublishedDate",
            name: "publishedDate",
            rules: [{ required: true }],
        },
    },
    {
        component: "FormList",
    },
    {
        component: "AntdSelect",
        placeholder: "Category",
        selectOption: {
            endPointData: points.GetCategoties,
            label: "categoryName",
            value: "id"
        },
        data: {
            label: "Category",
            name: "categoryId",
            rules: [{ required: false }],
        },
    },
    {
        component: "AntdInput",
        placeholder: "Book Count",
        data: {
            label: "Book Count",
            name: "bookCount",
            rules: [{ required: true }],
        },
    },
    {
        component: "AntdInput",
        placeholder: "Cost Price",
        data: {
            label: "Cost Price",
            name: "costPrice",
            rules: [{ required: true }],
        },
    },
    {
        component: "AntdInput",
        placeholder: "Sell Price",
        data: {
            label: "Sell Price",
            name: "sellPrice",
            rules: [{ required: true }],
        },
    },
    {
        component: "AntdInput",
        placeholder: "Library Ratio",
        data: {
            label: "Library Ratio",
            name: "libraryRatio",
            rules: [{ required: true }],
        },
    }
]

const loginFields = [
    {
        component: "AntdInput",
        placeholder: "Email or Username",
        disabled: false,
        data: {
            label: "Email or Username",
            name: "userName",
            rules: [{ required: true, type: 'email' }],
        },
    },
    {
        component: "AntdPasswordInput",
        placeholder: "Password",
        disabled: false,
        data: {
            label: "Password",
            name: "password",
            rules: [{ required: true }],
        },
    },
]


export { categoryFields, branchFields, orderFields, invoiceFields, userFields, authorFields, bookFields, loginFields }
