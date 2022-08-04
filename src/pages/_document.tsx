import Document, {
    Head,
    Html,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from "next/document";

export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render(): JSX.Element {
        return (
            <Html lang="pt-BR">
                <Head>
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="../assets/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="../assets/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="../assets/favicon-16x16.png"
                    />
                    <link rel="manifest" href="../assets/site.webmanifest" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;800&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
