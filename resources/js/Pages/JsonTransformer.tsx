import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function JsonTransformer() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
        </AuthenticatedLayout>
    );
}
