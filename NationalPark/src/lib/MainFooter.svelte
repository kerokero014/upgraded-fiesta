<script>
    export let year = new Date().getFullYear();
    export let companyName = 'Default Company';
</script>

<footer>
    <p>© {year} {companyName}. All rights reserved.</p>
</footer>

<style>
    footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #f8f9fa;
        color: black;
        text-align: center;
        padding: 10px 0;
    }
</style>