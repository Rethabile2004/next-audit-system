import { SignedIn, SignIn } from '@clerk/nextjs';


const SignInPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 mt-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full items-center">
        <div className="space-y-6 text-center md:text-left">
          <SignedIn>
            Signed IN User
          </SignedIn>
          <h1 className="text-4xl md:text-6xl font-bold capitalize">
            Streamline auditing system
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ut
            nihil nostrum quibusdam pariatur officiis rem minima earum
            distinctio! Molestias ducimus, tenetur sed a quam dolorum voluptatum
            magni vel porro?
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary: 'bg-primary hover:bg-primary/90 text-white',
              },
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default SignInPage;