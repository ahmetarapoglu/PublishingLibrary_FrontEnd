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


export { categoryFields, branchFields, orderFields, invoiceFields }
