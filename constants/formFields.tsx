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


export { categoryFields, branchFields, orderFields, invoiceFields, userFields, authorFields }
