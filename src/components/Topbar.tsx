export const Topbar = () => {
    return (
        <div
            className="flex flex-col gap-1 justify-center px-4 sm:px-6 h-20 sm:h-24 w-full bg-white border-b border-neutral-200"
        >
            <h1 className="text-lg sm:text-xl font-bold text-gray-900">Invite & Earn</h1>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-full sm:max-w-md">
                Keep track of your addresses, location updates. Edit, Delete, Update and see all your saved addresses.
            </p>
        </div>
    );
};
